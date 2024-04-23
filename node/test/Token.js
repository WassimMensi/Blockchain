const { expect } = require("chai");

// ethers.js est une librairie qui permet d'interagir avec les contrats

describe("On s'apprete a tester le deploiement du token", function () {
    it("Should send the total to the owner", async function () {
        const[owner] = await ethers.getSigners();

        const Token = await ethers.deployContract("Token");

        const ownerBalance = await Token.balanceOf(owner.address);

        expect(await Token.totalSupply()).to.equal(ownerBalance);
    });
});