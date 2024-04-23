const { expect } = require("chai");

// ethers.js est une librairie qui permet d'interagir avec les contrats

describe("On s'apprete a tester le deploiement du token", function () {
    it("Should send the total to the owner", async function () {
        const[owner] = await ethers.getSigners();

        const Wss = await ethers.deployContract("WSS");

        const ownerBalance = await Wss.balanceOf(owner.address);

        expect(await Wss.totalSupply()).to.equal(ownerBalance);
    });
});