pragma solidity ^0.4.23;


contract Parent {
    uint256 public prop;

    constructor(uint256 _prop) public {
        prop = _prop;
    }
}
