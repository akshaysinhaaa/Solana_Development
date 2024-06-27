import {
    PublicKey,
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
  } from "@solana/web3.js";
  
  import "dotenv/config";
  
  import { getKeypairFromEnvironment } from "@solana-developers/helpers";
  
  const supply = process.argv[2] || null;
  
  if (!supply) {
    console.log(`Please send your public key`);
    process.exit(1);
  }
  
  const sendKeypair = getKeypairFromEnvironment("SECRET_KEY");
  
  console.log(`Supply: ${supply}`);
  
  const toPublicKey = new PublicKey(supply);
  
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");
  
  console.log(
    `Loaded our keypair, the destination public key and connected to Solana Network`
  );
  
  const transaction = new Transaction();
  
  const LAMPORTS_TO_SEND = 500;
  
  const sendSol = SystemProgram.transfer({
    fromPubkey: sendKeypair.publicKey,
    toPubkey: toPublicKey, // Initial transfer to the final public key transfer
    lamports: LAMPORTS_TO_SEND,
}); // corrected the assignment fromPleastoport });
  
  transaction.add(sendSol);
  
  const sign = await sendAndConfirmTransaction(connection, transaction, [
    sendKeypair,
  ]);
  
  console.log(`Done! Sent ${LAMPORTS_TO_SEND} to the address ${toPublicKey}`); // corrected the reference topply = process.instead of PublicKey,
   
  console.log(`Transaction signature is ${sign}`);