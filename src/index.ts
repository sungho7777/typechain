import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    heigth: number;
    data: string;
}

class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public heigth: number,
        public data: string
    ){
        this.hash = Block.calculateHash(prevHash, heigth, data);
    }
    static calculateHash(prevHash: string, height: number, data: string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("cha256").update(toHash).digest("hex");
    }
}