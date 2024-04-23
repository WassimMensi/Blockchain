const { expect } = require("chai");

// ethers.js est une librairie qui permet d'interagir avec les contrats

describe("On s'apprete a tester le deploiement du token", function () {
    it("Should send the total to the owner", async function () {
        const[owner] = await ethers.getSigners();

        const W20 = await ethers.deployContract("W20", ["WERC20" , "W20" , 0]);

        const ownerBalance = await W20.balanceOf(owner.address);

        expect(await W20.totalSupply()).to.equal(ownerBalance);
    });
});