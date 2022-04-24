// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./IERC1155Merchant.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; 

pragma abicoder v2;

contract ERC1155Merchant is
    ERC1155,
    ERC1155Burnable,
    ERC1155Supply,
    ERC2981,
    IERC1155Merchant,
    AccessControl
{
    using Counters for Counters.Counter; 
    Counters.Counter private _tokenIds; 

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bool isPublic = false;
    address token;
    mapping (uint256 => string) private _tokenURIs;

    event Sale(
        uint256 indexed price,
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    ) anonymous;

    event Listed(
        address indexed contractId,
        uint256 indexed price,
        address indexed from,
        uint256 indexed tokenId
    ) anonymous;


    constructor(address tokenAddress, address[] memory minters,
        address[] memory admins) ERC1155("") {

        token = tokenAddress;
        if (minters.length == 0) {
            isPublic = true;
        } else {
            for (uint256 i = 0; i < minters.length; i++) {
                _setupRole(MINTER_ROLE, minters[i]);
            }
        }
        for (uint256 i = 0; i < admins.length; i++) {
            setApprovalForAll(admins[i], true);
        }
    }

    function customToken() external override view returns (address){
        return token;
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        override(ERC1155, ERC1155Supply)
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }

    /**
     * @dev See {ERC1155-_burn}. This override additionally clears the royalty information for the token.
     */
    function _burn(address from,
        uint256 tokenId,
        uint256 amount) internal virtual override {
        super._burn(from, tokenId, amount);
        _resetTokenRoyalty(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControl, ERC1155, ERC2981)
        returns (bool)
    {
        return
            ERC1155.supportsInterface(interfaceId) ||
            AccessControl.supportsInterface(interfaceId);
    }

    function mint(
        address minter,
        uint256 tokenId,
        string memory tokenUri,
        uint96 royalty,
        uint256 amount
    ) external override returns (bool) {
        if (!isPublic) {
            require(
                hasRole(MINTER_ROLE, msg.sender),
                "invalid or unauthorized caller"
            );
            require(
                hasRole(MINTER_ROLE, minter),
                "invalid or unauthorized minter"
            );
        }
        _mint(minter, tokenId, amount, "");
        _setTokenUri(tokenId, tokenUri); 
        _setTokenRoyalty(tokenId, minter, royalty);
        return true;
    }

    function uri(uint256 tokenId) override public view 
    returns (string memory) { 
        return(_tokenURIs[tokenId]); 
    } 
    function _setTokenUri(uint256 tokenId, string memory tokenURI)
    private {
         _tokenURIs[tokenId] = tokenURI; 
    } 

    function emitSale(
        uint256 price,
        address from,
        address to,
        uint256 tokenId
    ) external override {
        require(isApprovedForAll(to, msg.sender), "Not Approved to log event");
        emit Sale(price, to, from, tokenId);
    }

    function emitListing(
        uint256 price,
        address from,
        uint256 tokenId
    ) external override {
        require(
            isApprovedForAll(from, msg.sender),
            "Not Approved to log event"
        );
        emit Listed(address(this), price, from, tokenId);
    }
}
