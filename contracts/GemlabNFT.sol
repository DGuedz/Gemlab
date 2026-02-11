// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// Counters was removed in OZ v5; use a simple uint counter
import "./interfaces/ITokenValidator.sol";

contract GemlabNFT is ERC721, Ownable {
    ITokenValidator public immutable validator;
    uint256 private _ids;

    mapping(uint256 => bytes32) public tokenOriginUID;
    mapping(uint256 => bytes32) public tokenScienceUID;
    mapping(uint256 => bytes32) public tokenCustodyUID;

    constructor(address _validator) ERC721("GEMLAB Emerald", "GEML") Ownable(msg.sender) {
        validator = ITokenValidator(_validator);
    }

    function mintWithProof(
        bytes32 originUID,
        bytes32 scienceUID
    ) external returns (uint256 tokenId) {
        validator.requireValidAttestations(originUID, scienceUID);
        _ids += 1;
        tokenId = _ids;
        _mint(msg.sender, tokenId);
        tokenOriginUID[tokenId] = originUID;
        tokenScienceUID[tokenId] = scienceUID;
    }

    function setCustodyUID(uint256 tokenId, bytes32 custodyUID) external onlyOwner {
        require(_ownerOf(tokenId) != address(0), "Invalid token");
        tokenCustodyUID[tokenId] = custodyUID;
    }
}
