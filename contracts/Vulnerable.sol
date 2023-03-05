// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;


contract Vulnerable {

    constructor() payable {}


    function withdraw() public returns(bool success) {
        address addr = msg.sender;
        uint256 a;
        assembly {
            a := extcodesize(addr)
        }
        if (a > 0){
            revert("Only EOAs can call this contract");
        }
        (success,) = payable(address(msg.sender)).call{value: address(this).balance}("");
    }
}