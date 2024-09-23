//Deploys the contract to the blockchain
//Deploy TruthPaltform.sol to Ethereum network
// Truffle uses migration scripts to track which contracts have been deployed 

const TruthPlatform = artifacts.require("TruthPlatform");  // Loads the contract

module.exports = function (deployer){
    // deployer.deploy(TruthPlatform, {gas: 8000000});
    deployer.deploy(TruthPlatform); // Deploys contract during the migration process
};

