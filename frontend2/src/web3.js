// Connects frontend with the blockchain using Web3.js
import Web3 from'web3'; //Interface to communicate with smart contracts and blockchain
import TruthPlatform from './contracts/TruthPlatform.json'; //Imports compiled ABI

let web3; // Variable to later hold Web3 instance. Allows interaction with blockchain
let contract; // Variable to later hold instance of deployed TruthPlatform smart contract

const initWeb3 = async() => { // Asynchronous function (concurrent, NOT parallel)
    if (window.ethereum){
        try{
            await window.ethereum.request({ method: 'eth_requestAccounts'});
            web3 = new Web3(window.ethereum);
    
            const contractAddress = '0xE1BF025EAc1ED518698D4F252d84eC3dfF67CF4d';
            
            //const contractAddress = '0xC1D0804920cefCcF735F6CA47ba98a0fc80c980D';
            
            const abi = TruthPlatform.abi;
            contract = new web3.eth.Contract(abi, contractAddress); // Contract instance
        }   catch(error){
            console.error("User denied account access or other issue: ", error);
        } 
    } else {
        console.error('MetaMask not found. Please install MetaMask to use this app.');
    }
};
       

export{initWeb3, contract};