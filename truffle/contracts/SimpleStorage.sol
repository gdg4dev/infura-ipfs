// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  string ipfsHash;

  function read() public view returns (string memory) {
    return ipfsHash;
  }

  function write(string memory _x) public {
    ipfsHash = _x;
  }
}
