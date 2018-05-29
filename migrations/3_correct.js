const CorrectChild = artifacts.require("./CorrectChild.sol");

module.exports = (deployer) => {
    deployer.deploy(CorrectChild, 100).then(() => {
        console.log(CorrectChild.address);
    });
};
