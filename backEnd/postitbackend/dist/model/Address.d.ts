export declare class Address {
    addressId: string;
    street: string;
    area: string;
    state: string;
    postCode: number;
    constructor(addressId?: string, street?: string, area?: string, state?: string, postCode?: number);
    getAddressId(): string;
    getStreet(): string;
    getArea(): string;
    getState(): string;
    getPostCode(): number;
    setAddressId(addressId: string): void;
    setStreet(street: string): void;
    setArea(area: string): void;
    setState(state: string): void;
    setPostCode(postCode: number): void;
}
