import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log("We have sucessfully loaded secret key from .env file");