import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const publicKey = new PublicKey("4ESXBpXQVbv1KubuRLMidJMnn4EpMTxqffQnVwpaLsCT");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const balance = await connection.getBalance(publicKey);

const balanceSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of wallet address ${publicKey} is ${balanceSol} SOL !`)