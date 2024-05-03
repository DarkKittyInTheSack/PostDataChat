/* eslint-disable prettier/prettier */
import { DATA_MAX_LENGTH, DATA_MIN_LENGTH, INVALID_EMAIL, INVALID_PHONE_NUMBER, REQUIRED_DATA } from "./MessageUtils";

/* eslint-disable prettier/prettier */
export class Validation{
    checkNullData(data: string){
        if(data === ''){
            return REQUIRED_DATA
        }
        return ''
    }

    checkEmailType(data:string){
        if(!data.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return INVALID_EMAIL
        }
        return ''
    }

    checkPhoneNumber(data:string){
        if(!data.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)){
            return INVALID_PHONE_NUMBER
        }
        return ''
    }

    checkDataLength(maxLength:number,minLength:number, inputData:any){
        if(inputData.length > maxLength){
            return DATA_MAX_LENGTH + maxLength
        }

        if(inputData.length < minLength){
            return DATA_MIN_LENGTH + minLength
        }

        return ''
    }
}