// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
contract NFT is ERC721Enumerable, ERC2981{
    address royaltyreceiver;
    uint totalsupply;
    uint circulatingsupply;

    /////////////////////////////////////////////////////////////////////CONSTRUCTOR//////////////////////////////////////////////////////////////////
    constructor(address _royaltyreceiver) ERC721("FUNHOUSE", "FH"){
        royaltyreceiver = _royaltyreceiver;
    }

    ////////////////////////////////////////////////////////////////////////MODIFIER///////////////////////////////////////////////////////////////////

    modifier onlyOwner() {
        require(msg.sender == royaltyreceiver);
        _;
    }

    ///////////////////////////////////////////////////////////////////////EVENTS//////////////////////////////////////////////////////////////

    event minted(address owner, uint tokenid);

    function _baseURI() internal view virtual override(ERC721) returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/";
    }

    function changeroyaltyreceiver(address newroyaltyreceiver) external returns(address){
        return  royaltyreceiver = newroyaltyreceiver;
    }

    function supportsInterface(bytes4 interfaceId)public view override(ERC721Enumerable,ERC2981) returns (bool) {
        return interfaceId == type(IERC2981).interfaceId || super.supportsInterface(interfaceId);
    }

    function settotalsupply(uint total) external onlyOwner{   
        totalsupply = total;
    }

    function retrieve(address _owner) view external returns(uint[] memory){  
        uint alltokens = balanceOf(_owner);
        uint[] memory result = new uint[](alltokens);
        require(alltokens <= 1, "dont have tokens");
        for (uint i = 0; i < result.length; i++) {
            result[i] = tokenOfOwnerByIndex(_owner, i);
        } 
        return result;
    }

    function mint(address owner) external{
        require(owner != address(0), "cant mint to address 0");
        require(circulatingsupply <= totalsupply, "longer available");
        uint newid = circulatingsupply + 1;
        _safeMint(owner,newid); 
        circulatingsupply = circulatingsupply + 1;
        emit minted(owner, newid);   
    }

    function royaltyInfo(uint256 _tokenId, uint256 _salePrice) public view  override returns (address, uint256) {
        uint royaltyAmount = (_salePrice * 2) / 100;
        return (royaltyreceiver, royaltyAmount);
    }
}