import jwt from 'jsonwebtoken';
export declare const jsonwebtoken: {
    createJwtToken(data: any): string;
    createRefreshToken(data: any): string;
    checkToken(data: any): void;
    checkRefreshToken(data: any): void;
    decodeToken(data: any): string | jwt.JwtPayload;
};
