const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const WssErc20Module = buildModule("WssErc20Module", (m) => {
  const WssErc20 = m.contract("WSSERC20", ["WSSERC20" , "WERC20" , 0]);

  return { WssErc20 };
});

module.exports = WssErc20Module;

// Pour indiquer a Hardhat de se connecter
// a un reseau specifique, il faut utiliser la commande