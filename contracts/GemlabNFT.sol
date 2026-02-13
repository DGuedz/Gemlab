// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
// Counters was removed in OZ v5; use a simple uint counter
import "./interfaces/ITokenValidator.sol";

contract GemlabNFT is ERC721, Ownable, Pausable {
    ITokenValidator public immutable validator;
    uint256 private _ids;

    mapping(uint256 => bytes32) public tokenOriginUID;
    mapping(uint256 => bytes32) public tokenScienceUID;
    mapping(uint256 => bytes32) public tokenCustodyUID;

    constructor(address _validator) ERC721("GEMLAB Emerald", "GEML") Ownable(msg.sender) {
        validator = ITokenValidator(_validator);
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function mintWithProof(
        bytes32 originUID,
        bytes32 scienceUID
    ) external whenNotPaused returns (uint256 tokenId) {
        validator.requireValidAttestations(originUID, scienceUID);
        _ids += 1;
        tokenId = _ids;
        _mint(msg.sender, tokenId);
        tokenOriginUID[tokenId] = originUID;
        tokenScienceUID[tokenId] = scienceUID;
    }

    function setCustodyUID(uint256 tokenId, bytes32 custodyUID) external onlyOwner whenNotPaused {
        require(_ownerOf(tokenId) != address(0), "Invalid token");
        tokenCustodyUID[tokenId] = custodyUID;
    }

    // Override _update (OpenZeppelin v5) to enforce pause on transfers and mints
    function _update(address to, uint256 tokenId, address auth) internal override(ERC721) whenNotPaused returns (address) {
        return super._update(to, tokenId, auth);
    }
}
