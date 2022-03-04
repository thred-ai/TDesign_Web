const hre = require("hardhat");
const fs = require('fs');

async function main() {


  console.log("nft deploy starting");


  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy('Thred', 'THRD', 'THRED-NFT', '1', '0x0000000000000000000000000000000000000000');
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

 
  let config = `
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
