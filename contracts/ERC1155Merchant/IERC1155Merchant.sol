// SPDX-License-Identifier: MIT OR Apache-2.0

pragma solidity >=0.7.0 <0.9.0;

interface IERC1155Merchant {

    function customToken(
    ) external view returns (address);

    function mint(
        address minter,
        uint256 tokenId,
        string memory tokenUri,
        uint96 royalty,
        uint256 amount
    ) external returns (bool);

    function emitSale(
        uint256 price,
        address from,
        address to,
        uint256 tokenId
    ) external;

    function emitListing(
        uint256 price,
        address from,
        uint256 tokenId
    ) external;
}
