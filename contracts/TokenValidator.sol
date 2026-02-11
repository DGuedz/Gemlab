// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IEAS {
    struct Attestation {
        bytes32 uid;
        bytes32 schema;
        address attester;
        uint64 time;
        uint64 revocationTime;
    }
    function getAttestation(bytes32 uid) external view returns (Attestation memory);
}

contract TokenValidator {
    address public immutable eas;
    bytes32 public immutable originSchemaUID;
    bytes32 public immutable scienceSchemaUID;
    address public immutable originAttester;
    address public immutable scienceAttester;

    constructor(address _eas, bytes32 _originSchemaUID, bytes32 _scienceSchemaUID, address _originAttester, address _scienceAttester) {
        eas = _eas;
        originSchemaUID = _originSchemaUID;
        scienceSchemaUID = _scienceSchemaUID;
        originAttester = _originAttester;
        scienceAttester = _scienceAttester;
    }

    function requireValidAttestations(bytes32 originUID, bytes32 scienceUID) external view {
        IEAS.Attestation memory origin = IEAS(eas).getAttestation(originUID);
        IEAS.Attestation memory science = IEAS(eas).getAttestation(scienceUID);
        require(origin.schema == originSchemaUID, "Invalid origin schema");
        require(science.schema == scienceSchemaUID, "Invalid science schema");
        require(origin.attester == originAttester, "Invalid origin attester");
        require(science.attester == scienceAttester, "Invalid science attester");
        require(origin.revocationTime == 0, "Origin revoked");
        require(science.revocationTime == 0, "Science revoked");
    }

    function getStatus(uint256) external pure returns (uint8) {
        return 1;
    }
}
