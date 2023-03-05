import { ethers } from "hardhat";

async function main() {
  // const [owner] = ethers.getSigners();

  const VULNERABLE = await ethers.getContractFactory("Vulnerable");
  const Vulnerable = await VULNERABLE.deploy({value: await ethers.utils.parseEther("9")})
  await Vulnerable.deployed()
  const VULCONADDR = await Vulnerable.address

  console.log(`Vulnerable contract balance: ${await ethers.provider.getBalance(Vulnerable.address)}`)
  
  
  const SIZEZEROCONTRACT = await ethers.getContractFactory("SizeZeroContract");
  const SizeZeroContract = await SIZEZEROCONTRACT.deploy(VULCONADDR)
  await SizeZeroContract.deployed()


  // To know how the vulnerable contract would behave, uncomment the line of code below
  // and remove the VULCONADDR argument from line 15

  // await SizeZeroContract.withdraw(VULCONADDR)


  console.log(`Size zero contract balance: ${await ethers.provider.getBalance(SizeZeroContract.address)}`)
  console.log(`Vulnerable contract balance: ${await ethers.provider.getBalance(Vulnerable.address)}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
