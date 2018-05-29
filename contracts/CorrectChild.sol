pragma solidity ^0.4.23;

import "./Parent.sol";


contract CorrectChild is Parent {
    constructor(uint256 _prop) Parent(_prop) public {}
}
