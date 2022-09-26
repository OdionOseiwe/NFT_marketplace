// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "@openzeppelin/contracts/interfaces/IERC165.sol";

interface IERC2981{
    function royaltyInfo(uint256 _tokenId, uint256 _salePrice) external returns (address, uint256) ;
}

contract Marketplace is ReentrancyGuard, IERC721Receiver{
    /////////////////////////////////////////////////////////////////////STATE VARIABLES////////////////////////////////////////////////////////
    uint256 private nftsold;
    uint256 private nftkey;
    address owner;
    uint256 listingprice;
   
    
    ///////////////////////////////////////////////////////////////////////////STRUCT/////////////////////////////////////////////////////////
    struct Nftdetail{
        address seller;
        address buyer;
        uint price;
        bool sold;
        address nftaddress;
        uint tokenid;
        uint tokenkey;
    }

    /// @dev mapping of tokenkey to struct of nftdetails
    /////////////////////////////////////////////////////////////////////////////MAPPING//////////////////////////////////////////////////////////////////
    mapping (uint256 => Nftdetail) public NFTDetails;

    //////////////////////////////////////////////////////////////////////////CONSTRUCTOR////////////////////////////////////////////////////
    constructor(){
        owner = msg.sender;
    }

    /////////////////////////////////////////////////////////////////////////EVENTS/////////////////////////////////////////////////////////////
    event listed(
        address seller,
        address buyer,
        uint price,
        bool sold,
        address nftaddress,
        uint tokenid,
        uint tokenkey
    );

    ///////////////////////////////////////////////////////////////////////MODIFIER//////////////////////////////////////////////////////////
    modifier onlyowner {
        require(msg.sender == owner, "not owner");
        _;
    }

    /////////////////////////////////////////////////////////////////////CUSTOM ERRORS////////////////////////////////////////////////
    /// not owner
    error Notnftowner();

    /// Price must be at least 1 wei
    error Zeroprice();

    /// Price must be equal to listing price
    error Listingprice();

    /// amount not enough for this nft
    error insufficientfunds();

    /// @dev a function to set the listingprice
    function setlistingprice(uint price) external onlyowner{
        listingprice =  price;
    }

    /// @dev function were seller come to list their nft for sale on the platform
    /// @param _price for the nft to be listed
    /// @param _nftaddress address of the nft
    /// @param _tokenid the id of the nft to be listed
    function listnft(uint _price, address _nftaddress, uint _tokenid) external payable nonReentrant returns(uint256) {
        /// check if the msg.sender is the owner of the token
        if (IERC721(_nftaddress).ownerOf(_tokenid) != msg.sender){
            revert Notnftowner();
        }
        if ( _price <= 0) {
            revert Zeroprice();
        }
        if ( msg.value < listingprice) {
            revert Listingprice();
        }
        nftkey = nftkey + 1;
        uint256 key = nftkey;
        Nftdetail storage ND = NFTDetails[key];
        ND.seller = payable(msg.sender);
        ND.price = _price;
        ND.nftaddress = _nftaddress;
        ND.tokenid = _tokenid;
        ND.tokenkey = key;
        ND.sold = false;

        IERC721(_nftaddress).safeTransferFrom(msg.sender, address(this),_tokenid);
        emit listed(msg.sender,address(0),_price,false,_nftaddress,_tokenid,key);
        return key;
    }

    /// @dev a  user comes to buy an nft
    /// @param _tokenid nftid to buy
    function buynft(uint _tokenid) payable external {
        Nftdetail storage ND = NFTDetails[_tokenid];
        require(ND.sold != true, "already sold");
        if ( msg.value <  ND.price ) {
            revert insufficientfunds();
        }
        uint saleprice = msg.value;
        address seller = ND.seller;
        address nftaddress = ND.nftaddress;
        (bool sent,) = payable(seller).call{value:saleprice}("");
        require(sent == true, "failed");
        (bool sent2,) = payable(owner).call{value:listingprice}("");
        require(sent2 == true, "failed");
        // _getroyalties(_tokenid,saleprice,nftaddress);   //// check why this line is not working
        IERC721(nftaddress).safeTransferFrom(address(this), msg.sender,_tokenid);
        ND.buyer = payable(msg.sender);
        ND.sold = true;
        nftsold  = nftsold + 1;
    }

    function _checkRoyalties(address _contract) internal returns (bool) {
        bool success = IERC165(_contract).supportsInterface(0x2a55205a);
        return success;
    }

    function _getroyalties(uint tokenid, uint price , address nftaddress) internal returns(uint netprice){
        bool implement = _checkRoyalties(nftaddress);
        require(implement == true, "does implements");
        (address royalityreceiver, uint amountofroyalties) = IERC2981(nftaddress).royaltyInfo(tokenid, price);
        uint sellermoney = price - amountofroyalties;
        (bool sent,) = payable(royalityreceiver).call{value: amountofroyalties}("");
        require(sent == true, "failed");
        return sellermoney;
    }  

     function fetchMarketItems() public view returns (Nftdetail[] memory) {
        uint256 itemCount = nftkey;
         uint256 currentIndex = 0;
        uint256 unsoldItemCount = nftkey- nftsold;
        Nftdetail[] memory items = new Nftdetail[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (NFTDetails[i + 1].sold == false) {
                uint256 currentId = i + 1;
                Nftdetail storage currentItem  =NFTDetails[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (Nftdetail[] memory) {
        uint256 totalItemCount = nftkey;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (NFTDetails[i + 1].buyer == msg.sender) {
                itemCount += 1;
            }
        }

        Nftdetail[] memory items = new Nftdetail[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (NFTDetails[i + 1].buyer == msg.sender) {
                uint256 currentId = i + 1;
                Nftdetail storage currentItem  =NFTDetails[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Returns only items a user has created */
    function fetchItemsCreated() public view returns (Nftdetail[] memory) {
        uint256 totalItemCount = nftkey;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (NFTDetails[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        Nftdetail[] memory items = new Nftdetail[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (NFTDetails[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                Nftdetail storage currentItem = NFTDetails[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    uint num= 70000; 

    function getname() external view returns(uint) {
        return num;
    }

    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4){
        return type(IERC721Receiver).interfaceId;
        }
}