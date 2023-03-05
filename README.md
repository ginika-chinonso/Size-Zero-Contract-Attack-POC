# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# About

This project illustrates how a contract that uses the code size of the caller to know if the caller is a contract or EOA can be exploited.

The Vulnerable contract in Vulnerable.sol has a withdraw function that is meant to enable only EOAs call it. It used the code size of the caller to determine if the caller is an EOA or contract.

The sizezerocontract in SizeZeroContract.sol exploits this vulnerability by calling the withdraw function of the vulnerable contract in its constructor thereby enabling it to withdraw all the funds in the vulnerable contract.

A withdraw function (which is commented out) is implemented in the sizezerocontract to know how the vulnerable contract would behave if you try to call the function outside the constructor.