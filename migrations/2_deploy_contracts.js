const DSTokenInterface = artifacts.require("dsprotocol/token/DSTokenInterface");

module.exports = function(deployer, network, accounts) {
 // deployer.deploy(SimpleToken, 18, 21000000);
 deployer.deploy(DSTokenInterface);
};