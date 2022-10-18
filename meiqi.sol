// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MeiqiZhang {

uint256 public voteA;
  uint256 public voteB;


  function voteSlectA() public {
    voteA++;
  }

  function voteSlectB() public {
    voteB++;
  }

  function viewVotes() public view returns (uint256, uint256) {
      return (voteA, voteB);
  }

}