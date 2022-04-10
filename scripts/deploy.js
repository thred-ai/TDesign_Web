const hre = require("hardhat");
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



  console.log("nft deploy starting");

  const NFT2 = await hre.ethers.getContractFactory("ThredMarketplace");
  const nft2 = await NFT2.deploy('THRED-NFT', '1');
  await nft2.deployed();

  const NFT = await hre.ethers.getContractFactory("ERC1155Merchant");
  const nft = await NFT.deploy([],[nft2.address]);
  await nft.deployed();
  console.log("ERC1155Merchant deployed to:", nft.address);
  console.log("ThredMarketplace deployed to:", nft2.address);

  // const NFT = await hre.ethers.getContractFactory("ERC721Merchant");
  // const nft = await NFT.deploy("THRED","THRD",[],[nft2.address]);
  // await nft.deployed();
  // console.log("ERC721Merchant deployed to:", nft.address);
  // console.log("ThredMarketplace deployed to:", nft2.address);
  
  let config = `
  // export const erc721Merchant = "${nft.address}"
  export const erc1155Merchant = "${nft.address}"
  export const thredMarketplace = "${nft2.address}"
  // export const nftaddress = "${nft.address}"
  `


  // let data2 = JSON.parse(JSON.stringify({
  //   ABI: [
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "string",
  //           "name": "tknName",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "string",
  //           "name": "tknSymbol",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "address[]",
  //           "name": "minters",
  //           "type": "address[]"
  //         },
  //         {
  //           "internalType": "address[]",
  //           "name": "admins",
  //           "type": "address[]"
  //         }
  //       ],
  //       "stateMutability": "nonpayable",
  //       "type": "constructor"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "approved",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Approval",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": false,
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "ApprovalForAll",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": true,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "contractId",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "price",
  //           "type": "uint256"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Listed",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "bytes32",
  //           "name": "previousAdminRole",
  //           "type": "bytes32"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "bytes32",
  //           "name": "newAdminRole",
  //           "type": "bytes32"
  //         }
  //       ],
  //       "name": "RoleAdminChanged",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "sender",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "RoleGranted",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "sender",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "RoleRevoked",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": true,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "price",
  //           "type": "uint256"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Sale",
  //       "type": "event"
  //     },
  //     {
  //       "anonymous": false,
  //       "inputs": [
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "indexed": true,
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "Transfer",
  //       "type": "event"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "DEFAULT_ADMIN_ROLE",
  //       "outputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "",
  //           "type": "bytes32"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "MINTER_ROLE",
  //       "outputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "",
  //           "type": "bytes32"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "approve",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "balanceOf",
  //       "outputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "price",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "emitListing",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "price",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "emitSale",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "getApproved",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         }
  //       ],
  //       "name": "getRoleAdmin",
  //       "outputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "",
  //           "type": "bytes32"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "grantRole",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "hasRole",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "owner",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "isApprovedForAll",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "minter",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "string",
  //           "name": "uri",
  //           "type": "string"
  //         },
  //         {
  //           "internalType": "uint96",
  //           "name": "royalty",
  //           "type": "uint96"
  //         }
  //       ],
  //       "name": "mint",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "name",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "ownerOf",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "renounceRole",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes32",
  //           "name": "role",
  //           "type": "bytes32"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "account",
  //           "type": "address"
  //         }
  //       ],
  //       "name": "revokeRole",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "_tokenId",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "_salePrice",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "royaltyInfo",
  //       "outputs": [
  //         {
  //           "internalType": "address",
  //           "name": "",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "",
  //           "type": "uint256"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         },
  //         {
  //           "internalType": "bytes",
  //           "name": "_data",
  //           "type": "bytes"
  //         }
  //       ],
  //       "name": "safeTransferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "operator",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "bool",
  //           "name": "approved",
  //           "type": "bool"
  //         }
  //       ],
  //       "name": "setApprovalForAll",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "bytes4",
  //           "name": "interfaceId",
  //           "type": "bytes4"
  //         }
  //       ],
  //       "name": "supportsInterface",
  //       "outputs": [
  //         {
  //           "internalType": "bool",
  //           "name": "",
  //           "type": "bool"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [],
  //       "name": "symbol",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "tokenURI",
  //       "outputs": [
  //         {
  //           "internalType": "string",
  //           "name": "",
  //           "type": "string"
  //         }
  //       ],
  //       "stateMutability": "view",
  //       "type": "function"
  //     },
  //     {
  //       "inputs": [
  //         {
  //           "internalType": "address",
  //           "name": "from",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "address",
  //           "name": "to",
  //           "type": "address"
  //         },
  //         {
  //           "internalType": "uint256",
  //           "name": "tokenId",
  //           "type": "uint256"
  //         }
  //       ],
  //       "name": "transferFrom",
  //       "outputs": [],
  //       "stateMutability": "nonpayable",
  //       "type": "function"
  //     }
  //   ],
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

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
