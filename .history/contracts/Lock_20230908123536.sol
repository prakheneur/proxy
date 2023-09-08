// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    uint256 public totalSupply;
    address public owner;
    mapping(address => uint256) public balanceOf;
    //mapping(address => mapping(address => uint256)) public allowance;
    mapping(address => bool) public hasClaimed;

    function createToken(string memory _name, string memory _symbol) external {
        name = _name;
        symbol = _symbol;
        owner = msg.sender;
        totalSupply = 1000000 * (10 ** uint256(18));
        balanceOf[owner] = totalSupply;
    }

    function transfer(uint256 value) public returns (bool) {
        //require(to != address(0), "Invalid address");
        require(hasClaimed[msg.sender] == false, "already claimed");

        balanceOf[owner] -= value;
        balanceOf[msg.sender] += value;
        hasClaimed[msg.sender] = true;
        return true;
    }
}
// problem is to validate that person
