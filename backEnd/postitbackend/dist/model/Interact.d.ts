export declare class Interact {
    interactId: string;
    isLike: boolean;
    isDislike: boolean;
    constructor(interactId?: string, isLike?: boolean, isDislike?: boolean);
    getInteractId(): string;
    getLike(): boolean;
    getDislike(): boolean;
    setInteractId(interactId: string): void;
    setLike(isLike: boolean): void;
    setDislike(isDislike: boolean): void;
}
