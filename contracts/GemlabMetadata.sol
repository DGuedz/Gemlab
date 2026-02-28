// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GemlabMetadata {
    string public base;
    constructor(string memory _base) { base = _base; }
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        return string(abi.encodePacked(base, _toString(tokenId)));
    }
    function _toString(uint256 v) internal pure returns (string memory) {
        if (v == 0) return "0";
        uint256 j = v;
        uint256 len;
        while (j != 0) { len++; j /= 10; }
        bytes memory b = new bytes(len);
        uint256 k = len;
        while (v != 0) { k--; b[k] = bytes1(uint8(48 + v % 10)); v /= 10; }
        return string(b);
    }
}

