const TruthPlatform = artifacts.require("TruthPlatform");  // Loads the contract

module.exports = function (deployer){
    // deployer.deploy(TruthPlatform, {gas: 8000000});
    deployer.deploy(TruthPlatform); // Deploys contract during the migration process
};

//Deploys the contract to the blockchain
//Deploy TruthPaltform.sol to Ethereum network