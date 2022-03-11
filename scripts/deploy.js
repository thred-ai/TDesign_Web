const hre = require("hardhat");
const fs = require('fs');

async function main() {


  console.log("nft deploy starting");

  const NFT2 = await hre.ethers.getContractFactory("ThredMarketplace");
  const nft2 = await NFT2.deploy('THRED-NFT', '1');
  await nft2.deployed();

  const NFT = await hre.ethers.getContractFactory("ERC721Merchant");
  const nft = await NFT.deploy("THRED","THRD",[],[nft2.address]);
  await nft.deployed();
  console.log("ERC721Merchant deployed to:", nft.address);
  console.log("ThredMarketplace deployed to:", nft2.address);
  
  let config = `
  export const erc721Merchant = "${nft.address}"
  export const thredMarketplace = "${nft2.address}"
  export const nftaddress = "${nft.address}"
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
