// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract FiscalOracle {
    function onTrade(uint256 tokenId, uint256 priceWei) external pure returns (uint256, uint256, uint256) {
        uint256 cfem = priceWei * 2 / 100;
        uint256 iss = priceWei * 5 / 100;
        uint256 fund2050 = (cfem + iss) * 333 / 1000;
        return (cfem, iss, fund2050);
    }
}

