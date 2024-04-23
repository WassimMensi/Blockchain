const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const W20Module = buildModule("W20Module", (m) => {
  const W20 = m.contract("W20", ["WERC20" , "W20" , 0]);

  return { W20 };
});

module.exports = W20Module;

// Pour indiquer a Hardhat de se connecter
// a un reseau specifique, il faut utiliser la commande