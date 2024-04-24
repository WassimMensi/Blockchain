const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const WHerit20Module = buildModule("WHerit20Module", (m) => {
  const WH20 = m.contract("WHerit20", ["WHerit20" , "WMH" , 2]);

  return { WH20 };
});

module.exports = WHerit20Module;

// Pour indiquer a Hardhat de se connecter
// a un reseau specifique, il faut utiliser la commande