import { Keypair } from "@solana/web3.js";
//importing keypair

const keypair = Keypair.generate(); //prebuild function

console.log("Keypair is sucessfully Generated !");

//keypair = public + secret key

console.log("The public key is:", keypair.publicKey.toBase58());
console.log("The secret key is:", keypair.secretKey);
console.log("Finished !");
