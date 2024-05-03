/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import jwt from 'jsonwebtoken';

export const jsonwebtoken = {
    createJwtToken(data:any){
        return jwt.sign(data,'SECRET-KEY',{algorithm:'HS256',expiresIn: 86400*1 })
    },
    createRefreshToken(data:any){
        return jwt.sign(data,'SECRET_REFRESH_KEY',{algorithm: 'HS256', expiresIn: 86400*7 })
    },
    checkToken(data:any){
        jwt.verify(data,'SECRET_KEY', (err:any,decode:any) => err)
    },
    checkRefreshToken(data:any) {
        jwt.verify(data,'SECRET_KEY', (err:any,decode:any) => err)
    },
    decodeToken(data:any) {
        return jwt.decode(data)
    },
}