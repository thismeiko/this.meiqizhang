// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MeiqiZhang {

 uint256 public numSeenCode;


  function sawCode() public {
    numSeenCode++;
  }

  function viewViewers() public view returns (uint256) {
      return numSeenCode;
  }

}