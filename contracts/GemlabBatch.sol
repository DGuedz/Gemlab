// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// VSC Compliant Batch Contract for High-Value Emerald Lots
// Implements Access Control and Metadata Optimization
contract GemlabBatch is ERC1155, Ownable {
    
    // Mapping from Batch ID to Origin UID (Link to Physical/Fiscal Reality)
    mapping(uint256 => bytes32) public batchOriginUID;
    
    // Event for indexing (Economy of Data)
    event BatchMinted(uint256 indexed id, uint256 amount, bytes32 originUID);

    constructor() ERC1155("") Ownable(msg.sender) {}

    // Minting restricted to authorized operators (e.g., Mining Coops)
    function mintBatch(
        address to, 
        uint256 id, 
        uint256 amount, 
        bytes32 originUID,
        bytes memory data
    ) external onlyOwner {
        require(originUID != bytes32(0), "Invalid Origin UID");
        _mint(to, id, amount, data);
        batchOriginUID[id] = originUID;
        
        emit BatchMinted(id, amount, originUID);
    }
    
    // Batch minting for efficiency (Gas Saving)
    function mintBatchMultiple(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes32[] memory originUIDs,
        bytes memory data
    ) external onlyOwner {
        require(ids.length == originUIDs.length, "Length mismatch");
        _mintBatch(to, ids, amounts, data);
        
        for(uint256 i = 0; i < ids.length; i++) {
            batchOriginUID[ids[i]] = originUIDs[i];
            emit BatchMinted(ids[i], amounts[i], originUIDs[i]);
        }
    }
}
