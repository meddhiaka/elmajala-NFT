// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EmajalaNFT is ERC721, Ownable(msg.sender) {
    uint256 public mintPrice = 0.01 ether;
    uint256 public totalSupply;
    uint256 public maxSupply;
    mapping(address => uint256) public mintedWallets;

    constructor() payable ERC721("EmajalaNFT", "TNNFT") {
        maxSupply = 10;
    }

    function mint() external payable {
        require(mintedWallets[msg.sender] < 5, "Only 5 NFTs allowed per wallet");
        require(msg.value == mintPrice, "Incorrect Ether value sent");
        require(totalSupply < maxSupply, "Max supply reached");

        mintedWallets[msg.sender]++;
        totalSupply++;
        uint256 tokenId = totalSupply;
        _safeMint(msg.sender, tokenId);
    }

    // function tokens() external view returns (uint256[] memory) {
    //     uint256 n = totalSupply;
    //     uint256[] memory l = new uint256[](n);
    //     for(uint256 i = 0; i<n ; i++) {
    //         l[i] = tokenOfOwnerByIndex(owner(), i);
    //     }

    //     return l; 
    // }
}
