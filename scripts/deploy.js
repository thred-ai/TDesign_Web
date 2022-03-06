const hre = require("hardhat");
const fs = require('fs');

async function main() {


  console.log("nft deploy starting");


  const NFT = await hre.ethers.getContractFactory("ERC721Merchant");
  const nft = await NFT.deploy('Thred', 'THRD', 'THRED-NFT', '1', '0x0000000000000000000000000000000000000000');
  await nft.deployed();

  console.log("ERC721Merchant deployed to:", nft.address);

  const NFT2 = await hre.ethers.getContractFactory("ERC721FancyMerchant");
  const nft2 = await NFT.deploy('Thred', 'THRD', 'THRED-NFT', '1', '0x0000000000000000000000000000000000000000');
  await nft2.deployed();

  console.log("ERC721FancyMerchant deployed to:", nft2.address);

  let config = `
  export const erc721Merchant = "${nft.address}"
  export const erc721FancyMerchant = "${nft2.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
