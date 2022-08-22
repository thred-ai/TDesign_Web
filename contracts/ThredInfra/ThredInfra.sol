// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.7.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";

import "../ERC721Merchant/ERC721Merchant.sol";
import "../ERC1155Merchant/ERC1155Merchant.sol";

pragma abicoder v2;

contract ThredInfra is
    Initializable,
    ReentrancyGuardUpgradeable,
    PausableUpgradeable
{
    using Counters for Counters.Counter;
    using SafeMath for uint256;
    using Strings for uint256;

    Counters.Counter private _itemIds;

    address public deployerAddress;

    struct Item {
        address contractAddress;
        address ownerAddress;
        uint256 tokenId;
    }

    function pause() public {
        PausableUpgradeable._pause();
    }

    function unpause() public {
        PausableUpgradeable._unpause();
    }

    function initialize(
        address deployAddress
    ) public initializer {
        ReentrancyGuardUpgradeable.__ReentrancyGuard_init();
        PausableUpgradeable.__Pausable_init();
        deployerAddress = deployAddress;
    }

    function _collectionContains(Item[] memory items, address callerAddress)
        internal
        pure
        returns (bool)
    {
        bool contains = false;
        for (uint256 i = 0; i < items.length; i++) {
            if (callerAddress == items[i].ownerAddress) {
                contains = true;
            }
        }
        return contains;
    }

    function checkTokenGate(Item[] calldata items, address callerAddress) public view returns (bool) {
        Item[] memory assets = _getAssets(items);
        return _collectionContains(assets, callerAddress);
    }

    function _getAssets(Item[] memory items)
        internal
        view
        returns (Item[] memory)
    {
        uint256 itemCount = items.length;
        Item[] memory _items = new Item[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            Item memory item = items[i];
            IERC721 nft = IERC721(item.contractAddress);
            address owner = nft.ownerOf(item.tokenId);
            Item memory currentItem = Item(
                item.contractAddress,
                owner,
                item.tokenId
            );
            _items[i] = currentItem;
        }
        return _items;
    }
}
