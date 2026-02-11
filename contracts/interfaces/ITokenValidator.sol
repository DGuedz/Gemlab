// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ITokenValidator {
    function requireValidAttestations(bytes32 originUID, bytes32 scienceUID) external view;
    function getStatus(uint256 tokenId) external view returns (uint8);
}

