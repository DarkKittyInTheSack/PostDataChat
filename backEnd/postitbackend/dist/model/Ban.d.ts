export declare class Ban {
    banId: string;
    banTitle: string;
    banDescription: string;
    banDate: string;
    constructor(banId?: string, banTitle?: string, banDescription?: string, banDate?: string);
    getBanId(): string;
    getBanTitle(): string;
    getBanDescription(): string;
    getBanDate(): string;
    setBanId(banId: string): void;
    setBanTitle(banTitle: string): void;
    setBanDescription(banDescription: string): void;
    setBanDate(banDate: string): void;
}
