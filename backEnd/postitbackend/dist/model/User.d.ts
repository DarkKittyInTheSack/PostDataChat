export declare class User {
    userId: string;
    fullname: string;
    age: number;
    email: string;
    image: any;
    accountId: string;
    description: string;
    constructor(userId?: string, fullname?: string, age?: number, email?: string, image?: any, accountId?: string, description?: string);
    getUserId(): string;
    getFullname(): string;
    getAge(): number;
    getEmail(): string;
    getImage(): string;
    getAccountId(): string;
    getDescription(): string;
    setUserId(userId: string): void;
    setFullname(fullname: string): void;
    setAge(age: number): void;
    setEmail(email: string): void;
    setImage(image: string): void;
    setAccountId(accountId: string): void;
    setDescription(description: string): void;
}
