// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract GemlabResolver is AccessControl, Pausable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");

    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    function pause() external onlyRole(ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(ADMIN_ROLE) {
        _unpause();
    }

    function roleFor(bytes32 schemaUID) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("SCHEMA_ROLE_", schemaUID));
    }

    function setRole(bytes32 schemaUID, address attester) external onlyRole(ADMIN_ROLE) whenNotPaused {
        _grantRole(roleFor(schemaUID), attester);
    }

    function canAttest(bytes32 schemaUID, address attester) external view returns (bool) {
        if (paused()) return false;
        return hasRole(roleFor(schemaUID), attester);
    }
}
