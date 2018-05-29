const IncorrectChild = artifacts.require("./IncorrectChild.sol");

module.exports = (deployer) => {
    deployer.deploy(IncorrectChild).then(() => {
        console.log('This should be the default output for Truffle');
        try { console.log(IncorrectChild.address); }
        catch(e) { console.log(e) }

        console.log('This should throw during deploy and do not allow calling contract inside')
        console.log(IncorrectChild.address);
    });
};
