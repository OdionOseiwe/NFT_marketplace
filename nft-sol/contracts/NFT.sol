

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint256 MAX_SUPPLY = 100;
    uint256 myCounter = 1;

    constructor() ERC721("codes", "CD") {}

    function safeMint(address to, string memory uri) public {
        uint tokenId = myCounter; 
        require(myCounter <= MAX_SUPPLY, "Sorry, all NFTs have been minted!");
        myCounter = myCounter + 1;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }
}