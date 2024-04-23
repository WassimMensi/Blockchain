const { expect } = require("chai");

// ethers.js est une librairie qui permet d'interagir avec les contrats

describe("On s'apprete a tester le deploiement du token", function () {
    it("Should send the total to the owner", async function () {
        const[owner] = await ethers.getSigners();

        const WssErc20 = await ethers.deployContract("WSSERC20", ["WSSERC20" , "WERC20" , 0]);

        const ownerBalance = await WssErc20.balanceOf(owner.address);

        expect(await WssErc20.totalSupply()).to.equal(ownerBalance);
    });
});