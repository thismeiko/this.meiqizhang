// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MeiqiZhang {
uint256 public Num;

function checkNum() public view returns(uint256){
  return Num;
}
  function checkCode() public{
    Num++;
  } 
  
}