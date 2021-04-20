import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
            index: number, 
            previousHash:string, 
            timestamp: number,
            data: string 
        ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number,
    ) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, "20212021202120", "", "Vanakam", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];

const getNewTimestamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string) : Block => {
    const prevoiusBlock: Block = getLatestBlock();
    const newIndex: number = prevoiusBlock.index + 1;
    const newTimestamp: number = getNewTimestamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex, 
        prevoiusBlock.hash, 
        newTimestamp, data
        );
    
    const newBlock: Block = new Block(
        newIndex, 
        newHash, 
        prevoiusBlock.hash, 
        data, 
        newTimestamp
        );
    
    blockchain.push(newBlock);
    return newBlock;
}


console.log(createNewBlock("Nameste"), createNewBlock("Merci"));
console.log(blockchain);

export {};
