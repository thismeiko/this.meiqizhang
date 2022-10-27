// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.13;
  
  contract IsBest {
      //设置变量区
  //是哪个最好
  bool public isA;
  bool public isB;
  bool public isC;
  //是a
  uint public a;
  //是b
  uint public b;
  //是c
  uint public c;

  //设置是a/b/c，每点一次是，加一票
   //如果a小于b/c，则不是xx。反之。
  function setA() public{
a++;
if(a<b||a<c){
    isA == false;
}
else if(a>b&&a>c){
isA == true;
}
  }

  function setB() public{
      b++;
      if(b<a||b<c){
    isB == false;
}
else if(b>a&&b>c){
isB == true;
}
  }

  function setC() public{
      c++;
      if(c<b||c<a){
    isC == false;
}
else if(c>b&&c>a){
isC == true;
}
  }
 
  //读取a，b，c的票数
  function getABC() public view returns(uint,uint,uint){
      return(a,b,c);
  }

  //查看谁最好
   function getBest() public view returns(bool,bool,bool){
       return(isA,isB,isC);
   }


  }
