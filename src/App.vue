<template>
  <div id="app" v-if="!mainLoading">
    <h1>Wish you lucky!</h1>
    <div>
      This a simple zksync era dApp, there are 3 contracts you can try.
      You can use it for free, but it's at your own risk.
    </div>
    <div>
            <!-- add three bullets with content, and content align left-->
      <ul class="align-left">
        <li>pingpong: it will send 0.001 eth to the contract and contract will send it back</li>
        <li>logger: it will trigger log event</li>
        <li>counter: it will increase a counter</li>
      </ul>
    </div>
    <div class="main-box">
      <div class="balance">
        <!-- add one button, after click it will refresh the fee for interacting with three contracts-->
        <p>
          Your balance: <span v-if="retreivingBalance">Loading...</span> <span v-else>{{ currentBalance }} ETH</span>
          <button class="refresh-button" v-on:click="estimateFee">Estimate Fee</button>
        </p>

        <p>
          Expected fee for pingpong: <span v-if="retrievingFee">Loading...</span> <span v-else>{{
            contractArray['pingpong'].fee }} ETH</span>
            <!-- add one textbox to receive input value as ether-->
          <span><input type="text" class="value-input"  v-model="contractArray['pingpong'].value" placeholder="0.001" />ETH</span>
          <button class="refresh-button" :disabled='txStatus != 0 || !feeRetrieved' v-on:click="interactContract('pingpong')">Interact with PingPong</button>
        </p>
      </div>

      <div class="balance">
        <p>
          Expected fee for logger: <span v-if="retrievingFee">Loading...</span> <span v-else>{{ contractArray['logger'].fee
          }} ETH</span>
          <!-- disable button when retrievingFee is true -->
          <button class="refresh-button" :disabled='txStatus != 0 || !feeRetrieved' v-on:click="interactContract('logger')">Interact with Logger</button>
        </p>
      </div>
      <div class="balance">
        <p>
          Expected fee for counter: <span v-if="retrievingFee">Loading...</span> <span v-else>{{ contractArray['counter'].fee
          }} ETH</span>
          <button class="refresh-button" :disabled='txStatus != 0 || !feeRetrieved' v-on:click="interactContract('counter')">Interact with Counter</button>
        </p>
      </div>
      <div class="greeting-input">


        <!-- <button class="change-button" :disabled="txStatus != 0 || PINGPONG_CONTRACT_ABI" v-on:click="pingpong">
          <span v-if="!txStatus">Pingpong</span>
          <span v-else-if="txStatus == 1">Sending tx...</span>
          <span v-else-if="txStatus == 2">Waiting until tx is committed...</span>
          <span v-else-if="txStatus == 3">Updating the page...</span>
          <span v-else-if="retreivingPingpongFee">Updating the fee...</span>
        </button> -->
      </div>
    </div>
  </div>
  <div id="app" v-else>
    <div class="start-screen">
      <h1>Welcome to zksync era simple DApp!</h1>
      <button v-on:click="connectMetamask">Connect Metamask</button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
const PINGPONG_CONTRACT_ADDRESS = "0x2d3E6388DAdf32c109CaAB5E35F819F35452b393";
// eslint-disable-next-line
const PINGPONG_CONTRACT_ABI = require("./abi/pingpong.abi.json");


// eslint-disable-next-line
const LOGGER_CONTRACT_ADDRESS = "0xDCB9D388aa712A4Da8e96A4294B7511d7fe9fA1C";
// eslint-disable-next-line
const LOGGER_CONTRACT_ABI = require("./abi/logger.abi.json");

// eslint-disable-next-line
const COUNTER_CONTRACT_ADDRESS = "0x07a9C10aaF83cBF4f645E3Bb99C1bA278712B963";
// eslint-disable-next-line
const COUNTER_CONTRACT_ABI = require("./abi/counter.abi.json");

// const ETH_L1_ADDRESS = "0x0000000000000000000000000000000000000000";
// const allowedTokens = require("./eth.json");
import { Contract, Web3Provider, Provider } from "zksync-web3";
// `ethers` is only used in this tutorial for its utility functions
import { ethers } from "ethers";


export default {
  name: "App",
  data() {
    return {
      // define an array of contract information, include contract name, contract address, contract abi, contract instance of pingpong, logger, counter
      contractArray: {

        "pingpong":
        {
          name: "pingpong",
          address: PINGPONG_CONTRACT_ADDRESS,
          abi: PINGPONG_CONTRACT_ABI,
          instance: null,
          function: "pingpong",
          gasEstimateCall: null,
          gasLimit: 0,
          fee: 0,
          value: "0.001"
        },
        "logger": {
          name: "logger",
          address: LOGGER_CONTRACT_ADDRESS,
          abi: LOGGER_CONTRACT_ABI,
          instance: null,
          function: "log",
          gasEstimateCall: null,
          gasLimit: 0,
          fee: 0,
          value: "0"
        },
        "counter": {
          name: "counter",
          address: COUNTER_CONTRACT_ADDRESS,
          abi: COUNTER_CONTRACT_ABI,
          instance: null,
          function: "increase",
          gasEstimateCall: null,
          gasLimit: 0,
          fee: 0,
          value: "0"
        }
      },
      mainLoading: true,
      provider: null,
      signer: null,
      // 0 stands for no status, i.e no tx has been sent
      // 1 stands for tx is beeing submitted to the operator
      // 2 stands for tx awaiting commit
      // 3 stands for updating the balance and greeting on the page
      txStatus: 0,
      retrievingFee: false,
      feeRetrieved: false,

      retreivingBalance: false,
      currentBalance: "",
    };
  },
  methods: {
    initializeProviderAndSigner() {
      this.provider = new Provider('https://testnet.era.zksync.dev');
      // Note that we still need to get the Metamask signer
      this.signer = (new Web3Provider(window.ethereum)).getSigner();
      this.contractArray['pingpong'].instance = new Contract(
        PINGPONG_CONTRACT_ADDRESS,
        PINGPONG_CONTRACT_ABI,
        this.signer
      );
      this.contractArray['pingpong'].gasEstimateCall = this.contractArray['pingpong'].instance.estimateGas.pingpong;

      this.contractArray['logger'].instance = new Contract(
        LOGGER_CONTRACT_ADDRESS,
        LOGGER_CONTRACT_ABI,
        this.signer
      );
      this.contractArray['logger'].gasEstimateCall = this.contractArray['logger'].instance.estimateGas.log;

      this.contractArray['counter'].instance = new Contract(
        COUNTER_CONTRACT_ADDRESS,
        COUNTER_CONTRACT_ABI,
        this.signer
      );
      this.contractArray['counter'].gasEstimateCall = this.contractArray['counter'].instance.estimateGas.increase;
    },


    async getBalance() {
      // Getting the balance for the signer in the selected token
      const balanceInUnits = await this.signer.getBalance();
      // To display the number of tokens in the human-readable format, we need to format them,
      // e.g. if balanceInUnits returns 500000000000000000 wei of ETH, we want to display 0.5 ETH the user
      return Number(ethers.utils.formatEther(balanceInUnits)).toFixed(8);
    },


    async interactContract(contractName){
      this.txStatus = 1;
      let contractInfo = this.contractArray[contractName];
      let option = {
        gasLimit: contractInfo.gasLimit
      }
      if(Number(contractInfo.value) > 0){
        // parse ether to wei
        option.value = ethers.utils.parseEther(contractInfo.value);
        //option.value = contractInfo.value;
      }
      const tx = await contractInfo.instance.functions[contractInfo.function](option);
      this.txStatus = 2;

      await tx.wait();
      this.txStatus = 0;

      this.currentBalance = await this.getBalance();
    },

    async estimateFee() {
      this.retrievingFee = true;
      // loop contractArray to call estimateGas
      for (let contractName in this.contractArray) {
        let contractInfo = this.contractArray[contractName];
        console.log(contractInfo);

        let feeInGas = await contractInfo.gasEstimateCall();


        // convert feeInGas from hex to number
        contractInfo.gasLimit = ethers.BigNumber.from(feeInGas).toBigInt();

        // Getting the gas price per one erg. For now, it is the same for all tokens.
        const gasPriceInUnits = await this.provider.getGasPrice();

        // To display the number of tokens in the human-readable format, we need to format them,
        // e.g. if feeInGas*gasPriceInUnits returns 500000000000000000 wei of ETH, we want to display 0.5 ETH the user
        contractInfo.fee = Number(ethers.utils.formatEther(feeInGas.mul(gasPriceInUnits))).toFixed(6);
        console.log(contractInfo);
      }
      this.retrievingFee = false;
      this.feeRetrieved = true;
    },

   
    updateBalance() {
      this.retreivingBalance = true;
      this.getBalance()
        .then((balance) => {
          this.currentBalance = balance;
        })
        .catch((e) => console.log(e))
        .finally(() => {
          this.retreivingBalance = false;
        });
    },

    loadMainScreen() {
      this.initializeProviderAndSigner();

      if (!this.provider || !this.signer) {
        alert("Follow the tutorial to learn how to connect to Metamask!");
        return;
      }
      this.mainLoading = false;
      this.updateBalance();
    },
    connectMetamask() {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(() => {
          if (+window.ethereum.networkVersion == 324) {
            this.loadMainScreen();
          } else {
            alert("Please switch network to zkSync!");
          }
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#app ul {
  display: inline-block;
}

.main-box {
  text-align: left;
  width: 600px;

  margin: auto;
  margin-top: 40px;
}

.greeting-input {
  margin-top: 20px;
}

.change-button {
  margin-left: 20px;
}

.start-screen {
  margin-top: 100px;
}

.balance {
  margin-top: 10px;
}

.refresh-button {
  margin-left: 15px;
}

.align-left {
  text-align: left;
}

.value-input{
  width: 50px;
}
</style>
