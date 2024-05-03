export declare class Validation {
    checkNullData(data: string): "This data is required" | "";
    checkEmailType(data: string): "Email is not valid" | "";
    checkPhoneNumber(data: string): "Phone number is not valid" | "";
    checkDataLength(maxLength: number, minLength: number, inputData: any): string;
}
