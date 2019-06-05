import { Injectable } from '@angular/core';
import { Blockchain } from 'SavjeeCoin/src/blockchain';
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public BlockchainInstance = new Blockchain();
  public waletKeys = [];
  constructor() {
    this.BlockchainInstance.difficulty = 1;
    this.BlockchainInstance.minePendingTransactions('my-walletaddress');

    this.generateWaletKeys();

  }

  public getBlocks(){
    return this.BlockchainInstance.chain;
  }

  

  private generateWaletKeys(){
    const ec = new EC.ec('secp256k1');
    const key = ec.genKeyPair();
    this.waletKeys.push({
      keyObj:key,
      publicKey:key.getPublic('hex'),
      privateKey:key.getPrivate('hex')

    })
  }
}
