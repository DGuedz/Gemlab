// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MockEAS {
    struct Attestation { bytes32 uid; bytes32 schema; address attester; uint64 time; uint64 revocationTime; }
    mapping(bytes32 => Attestation) public a;
    function set(bytes32 uid, bytes32 schema, address attester, uint64 time, uint64 revocationTime) external { a[uid] = Attestation(uid, schema, attester, time, revocationTime); }
    function getAttestation(bytes32 uid) external view returns (Attestation memory) { return a[uid]; }
}
