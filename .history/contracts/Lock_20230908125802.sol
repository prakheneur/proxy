// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    address public owner;
    mapping(address => uint256) public balanceOf;
    mapping(address => bool) public hasClaimed;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function createToken(
        string memory _name,
        string memory _symbol
    ) external onlyOwner {
        name = _name;
        symbol = _symbol;
        totalSupply = 1000000 * (10 ** uint256(18));
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(uint256 value) public returns (bool) {
        require(hasClaimed[msg.sender] == false, "Already claimed");

        balanceOf[owner] -= value;
        balanceOf[msg.sender] += value;
        hasClaimed[msg.sender] = true;
        return true;
    }
}
//Problem in validating the user
