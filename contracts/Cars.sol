// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Cars is ERC1155Supply, Ownable {
    
    uint256 public constant CAR1 = 1;
    uint256 public constant CAR2 = 2;
    uint256 public constant CAR3 = 3;
    uint256 public constant CAR4 = 4;
    uint256 public constant CAR5 = 5;
    uint256 public constant COMPONENT1 = 6;
    uint256 public constant COMPONENT2 = 7;

    // Mappo il token uri con il token id
    mapping(uint256 => string) public _uris;


    /**
    * Costruttore de contratto che accetta in input il link ipfs dove risiedono i metadati
    * Nulla vieta di utilizzare un server cloud , o di una macchina.
    * Su ipfs i metadati sono immutabili
    * Su un server potrei aggiornare i metadati
     */
    constructor() ERC1155("ipfs://QmRJueffVCNwzj6gLfxzm4Fky9muBCg2j978rxp6gtCgUG/{id}.json"){

    }

    // Mint del Token
    function mint(address to, uint256 id, uint256 value, bytes memory data) external onlyOwner {
        _mint(to, id,value,data);
    }

    // Mint massivo del Token
    function mintBatch(address to, uint256[] memory ids, uint256[] memory values, bytes memory data) external onlyOwner{
        _mintBatch(to, ids, values, data);
    }

    // Mappa l'url del token con il suo id
    function setTokenUri(uint256 tokenId, string calldata tokenUri) external onlyOwner{
        _uris[tokenId] = tokenUri;
    }

    // Recupera l'url del token tramite il suo id
    function getTokenUri(uint256 tokenId) external view returns (string memory) {
        return _uris[tokenId];
    } 
}




