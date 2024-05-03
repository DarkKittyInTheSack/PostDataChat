/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare function uploadFile(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
