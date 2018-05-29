const IncorrectChild = artifacts.require("./IncorrectChild.sol");

module.exports = (deployer) => {
    deployer.deploy(IncorrectChild).then(() => {
        try { console.log(IncorrectChild.address); }
        catch(e) { console.log(e) }

        console.log(IncorrectChild.address);
    });
};
