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
        if (nftContract.ownerOf(_tokenid != msg.sender) {
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
        (bool sent,) = payable(seller).call{value:saleprice}("");
        require(sent == true, failed);
        (bool sent,) = payable(owner).call{value:listingprice}("");
        require(sent == true, failed);
        IERC721(_nftaddress).safeTransferFrom(address(this), msg.sender,_tokenid);
        ND.buyer = payable(msg.sender);
        ND.sold = true;
        nftsold.increment();
    }


    function getunsoldnft() external return(Nftdetail[] memory){

    }

    function _checkRoyalties(address _contract) internal returns (bool) {
        bool success = IERC165(_contract).supportsInterface(0x2a55205a);
        return success;
    }
}