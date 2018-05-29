const Parent = artifacts.require("./Parent.sol");

module.exports = (deployer) => {
    deployer.deploy(Parent, 100).then(() => {
        console.log(Parent.address);
    });
};
