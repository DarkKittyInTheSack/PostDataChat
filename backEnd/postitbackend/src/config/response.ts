/* eslint-disable prettier/prettier */
export const responseApi = (result:any, message:string) =>{
    return JSON.stringify({
        message: message,
        data: result
    });
}