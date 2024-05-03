/* eslint-disable prettier/prettier */
import toStream from 'buffer-to-stream';
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import dotenv from 'dotenv'
import cloudinary, { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary'

dotenv.config()
const cloudinaries = cloudinary.v2

cloudinaries.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

export async function uploadFile(file:Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>{
    return new Promise((resolve,reject) =>{
        const upload = cloudinaries.uploader.upload_stream((err,result) =>{
            if (err){
                return reject(err)
            }
            resolve(result)
        })

        toStream(file.buffer).pipe(upload);
    })
}