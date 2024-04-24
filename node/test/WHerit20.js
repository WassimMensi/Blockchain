const { expect } = require("chai");

// ethers.js est une librairie qui permet d'interagir avec les contrats

describe("On s'apprete a tester le deploiement du token", function () {
    it("Should send the total to the owner", async function () {
        const[owner] = await ethers.getSigners();

        const WHerit20 = await ethers.deployContract("WHerit20", ["WHerit20" , "WMH" , 2]);

        const ownerBalance = await WHerit20.balanceOf(owner.address);

        expect(await WHerit20.totalSupply()).to.equal(ownerBalance);
    });
});