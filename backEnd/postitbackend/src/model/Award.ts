/* eslint-disable prettier/prettier */
export class Award{
    awardId: string;
    awardName: string;

    constructor(awardId: string = '',awardName: string = ''){
        this.awardId = awardId;
        this.awardName = awardName;
    }

    getAwardId(): string{
        return this.awardId;
    }

    getAwardName(): string{
        return this.awardName;
    }

    setAwardId(awardId: string): void{
        this.awardId = awardId;
    }

    setAwardName(awardName: string): void{
        this.awardName = awardName;
    }
}