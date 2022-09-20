// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
interface IERC721{
       function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;
}

interface IERC165{
    function supportsInterface(bytes4 interfaceId) external returns (bool);
}

import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Marketplace is ReentrancyGuard{
    /////////////////////////////////////////////////////////////////////STATE VARIABLES////////////////////////////////////////////////////////
    using Counters for Counters.Counter;
    Counters.Counter private nftsold;
    Counters.Counter private nftkey;
    address owner;
    uint256 listingprice;
    uint nftsold;
   
    
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
    mapping (uint256 => Nftdetail) private NFTDetails;

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
        if (nftContract.ownerOf(_tokenid != msg.sender) ){
            revert Notnftowner();
        }
        if ( _price < 0) {
            revert Zeroprice();
        }
        if ( msg.value <= listingprice) {
            revert Listingprice();
        }
        nftkey.increment();
        uint256 key = nftkey.current();
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

    function buynft(uint _tokenid) payable external {
        Nftdetail storage ND = NFTDetails[_tokenid];
        require(ND.sold != true, "already sold");
        if ( msg.value <  ND.price ) {
            revert insufficientfunds();
        }
        uint saleprice = msg.value;
        uint seller = ND.seller;
        address nftaddress = ND.nftaddress;
        if (nftcreatortip > 0 ){
            uint nftcreatortip = _getroyalties(_tokenid,saleprice, nftaddress);
        }
        (bool sent,) = payable(seller).call{value:saleprice}("");
        require(sent == true, failed);
        (bool sent,) = payable(owner).call{value:listingprice}("");
        require(sent == true, failed);
        IERC721(_nftaddress).safeTransferFrom(address(this), msg.sender,_tokenid);
        ND.buyer = payable(msg.sender);
        ND.sold = true;
        nftsold.increment();
    }


    // function getunsoldnft() external returns(Nftdetail[] memory){

    // }

    function _checkRoyalties(address _contract) internal returns (bool) {
        bool success = IERC165(_contract).supportsInterface(0x2a55205a);
        return success;
    }

    function _getroyalties(uint tokenid, uint price , address nftaddress) internal returns(uint netprice){
        bool implement = _checkRoyalties(nftaddress);
        require(implement == true, "does implements");
        (address royalityreceiver, uint amountofroyalties) = nftaddress.royaltyInfo(tokenid, price);
        uint sellermoney = price - amountofroyalties;
        (bool sent,) = payable(royalityreceiver).call{value: amountofroyalties}("");
        require(sent == true, "failed");
        return sellermoney;
    }  

     function fetchMarketItems() public view returns (Nftdetail[] memory) {
        uint256 itemCount = nftkey.current();
        uint256 unsoldItemCount = nftkey.current() - nftsold.current();
        Nftdetail[] memory items = new Nftdetail[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (NFTDetails[i + 1].sold == false) {
                uint256 currentId = i + 1;
                Nftdetail storage currentItem  =NFTDetails[currentId];
                items.push(currentItem);
            }
        }
        return items;
    }

    /* Returns only items that a user has purchased */
    function fetchMyNFTs() public view returns (Nftdetail[] memory) {
        uint256 totalItemCount = nftkey.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (NFTDetails[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        Nftdetail[] memory items = new Nftdetail[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (NFTDetails[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                Nftdetail storage currentItem  =NFTDetails[currentId];
                items.push(currentItem);
            }
        }
        return items;
    }

    /* Returns only items a user has created */
    function fetchItemsCreated() public view returns (Nftdetail[] memory) {
        uint256 totalItemCount = nftkey.current();
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
                items.push(currentItem);
            }
        }
        return items;
    }  
}