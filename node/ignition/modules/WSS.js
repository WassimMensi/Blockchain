const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const WssModule = buildModule("WssModule", (m) => {
  const Wss = m.contract("WSS");

  return { Wss };
});

module.exports = WssModule;

// Pour indiquer a Hardhat de se connecter
// a un reseau specifique, il faut utiliser la commande