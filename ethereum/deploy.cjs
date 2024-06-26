const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const evs = require("./build/Electioncreation.json");

// import HDWalletProvider from "@truffle/hdwallet-provider";
// import {Web3} from "web3";
// import evs from "./build/Electioncreation.json";

const provider = new HDWalletProvider(
  "inspire faculty river blade pole into note sand awful display pledge clap",
  // remember to change this to your own phrase!
  "https://sepolia.infura.io/v3/fd4bf29c6e43458a9f1c75ca6d8179b7"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
    try {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(evs.abi)
    .deploy({ data: evs.evm.bytecode.object })
    .send({ gas: "2000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
    } catch (error) {
      console.error(error);
    }

  
};
deploy();
