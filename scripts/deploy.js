const hre = require("hardhat");
const { ethers, upgrades } = require('hardhat');

const fs = require('fs');
const initializeApp = require('firebase/app').initializeApp;
const getFirestore = require('firebase/firestore/lite').getFirestore;
const collection = require('firebase/firestore/lite').collection;
const setDoc = require('firebase/firestore/lite').setDoc;
const doc = require('firebase/firestore/lite').doc;

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Ec_FWZrlbTBWdgBWRrsBwMmXQ4aniWU",
  // authDomain: "shopmythred.com",
  databaseURL: "https://clothingapp-ed125.firebaseio.com",
  projectId: "clothingapp-ed125",
  storageBucket: "clothingapp-ed125.appspot.com",
  messagingSenderId: "628658827719",
  appId: "1:628658827719:web:66671544aeb6d2a78029e2",
  measurementId: "G-YVHCR44N65"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function main() {


  const thredMarketplace = await ethers.getContractFactory("ThredMarketplace");

  await upgrades.upgradeProxy('0xd0B2538F39dA19AE21f18626fBBc9F7498E8065E', thredMarketplace);

  // console.log("nft deploy starting");

  // const nft2 = await upgrades.deployProxy(thredMarketplace, ['THRED-NFT', '1', '0xd31c54eFD3A4B5E6a993AaA4618D3700a12ff752']);

  // const nft2 = await upgrades.deployProxy();

  // await nft2.deployed();

  // const NFT = await ethers.getContractFactory("ERC1155Merchant");
  // const nft = await NFT.deploy(_ethers.constants.AddressZero, [],[nft2.address]);
  // await nft.deployed();

  // const NFT3 = await ethers.getContractFactory("ERC721Merchant");
  // const nft3 = await NFT3.deploy("Thred", "THRD", _ethers.constants.AddressZero, [],[nft2.address]);
  // await nft3.deployed();

  // console.log("ERC1155Merchant deployed to:", nft.address);
  // console.log("ERC721Merchant deployed to:", nft3.address);
  // console.log("ThredMarketplace deployed to:", nft2.address);
  
  console.log("ThredMarketplace Updated!");


  // export const erc721Merchant = "${nft3.address}"
  // export const erc1155Merchant = "${nft.address}"
  // export const nftaddress = "${nft3.address}"

  // let config = `
  // export const thredMarketplace = "${nft2.address}"
  // `


  // let data2 = JSON.parse(JSON.stringify({
  //   ABI: [],
  //   Blurred: false,
  //   NFTs: [],
  //   available: true,
  //   collectionCount: 0,
  //   contract: '0xc08B0348734b66eE0091dED519fF763f4dCb2069',
  //   currency: 'MATIC',
  //   domain: 'THRED-NFT',
  //   isPublic: true,
  //   name: 'THRED',
  //   symbol: 'THRD',
  //   timestamp: new Date(),
  //   uid: null,
  //   volume: 0
  // }))

  // const docRef = doc(db, 'Collections/0xc08B0348734b66eE0091dED519fF763f4dCb2069')

  // let set = await setDoc(docRef, data2)
  
  // console.log(set)

  // let data = JSON.stringify(config)
  // writeFileSync('config.js', JSON.parse(data))

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
