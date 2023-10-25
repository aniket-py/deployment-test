const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const [deployer] = await ethers.getSigners();

  // Replace with the address of the deployed ERC-1155 contract
  const contractAddress = process.env.CONTRACT_ADDRESS || process.argv[2];
  if (!contractAddress) {
    console.error('Contract address not provided.');
    process.exit(1);
  }
  console.log("contractAddress:", contractAddress);

  // Connect to the ERC-1155 contract
  const erc1155Contract = await ethers.getContractAt("MyExtendedERC1155Token", contractAddress);

  // Call the mintFungible function
  const tokenIdToFungibleMint = 1; // Replace with the actual token ID
  const amountToFungibleMint = 100; // Replace with the actual amount
  const mintFungibleTx = await erc1155Contract.mintFungible(tokenIdToFungibleMint, amountToFungibleMint);
  await mintFungibleTx.wait();
  console.log(`Minted ${amountToFungibleMint} of ERC-1155 fungible token with ID ${tokenIdToFungibleMint}`);

  // Call the mintNonFungible function
  const tokenIdToNonFungibleMint = 2; // Replace with the actual token ID
  const mintNonFungibleTx = await erc1155Contract.mintNonFungible(process.env.Your_Address, tokenIdToNonFungibleMint);
  await mintNonFungibleTx.wait();
  console.log(`Minted an ERC-1155 non-fungible token with ID ${tokenIdToNonFungibleMint}`);

  // Call the burn function
  const tokenIdToBurn = 1; // Replace with the actual token ID
  const amountToBurn = 10; // Replace with the actual amount to burn
  const burnTx = await erc1155Contract.burn(tokenIdToBurn, amountToBurn);
  await burnTx.wait();
  console.log(`Burned ${amountToBurn} of ERC-1155 token with ID ${tokenIdToBurn}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
