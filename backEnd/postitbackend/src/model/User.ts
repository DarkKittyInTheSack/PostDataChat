/* eslint-disable prettier/prettier */
export class User{
    userId: string;
    fullname: string;
    age: number;
    email: string;
    image: any;
    accountId: string;
    description: string;

    constructor(userId: string = '', fullname: string = '', age: number = 0, email: string = '', image: any = null, accountId: string = '', description: string = ''){
        this.userId = userId;
        this.fullname = fullname;
        this.age = age;
        this.email = email;
        this.image = image;
        this.accountId = accountId;
        this.description = description;
    }

    getUserId():string{
        return this.userId;
    }

    getFullname():string{
        return this.fullname;
    }

    getAge():number{
        return this.age;
    }

    getEmail():string{
        return this.email;
    }

    getImage():string{
        return this.image;
    }

    getAccountId():string{
        return this.accountId;
    }

    getDescription():string{
        return this.description;
    }

    setUserId(userId: string):void{
        this.userId = userId;
    }

    setFullname(fullname: string):void{
        this.fullname = fullname;
    }

    setAge(age: number):void{
        this.age = age;
    }

    setEmail(email: string):void{
        this.email = email;
    }

    setImage(image: string):void{
        this.image = image;
    }

    setAccountId(accountId: string):void{
        this.accountId = accountId;
    }

    setDescription(description: string):void{
        this.description = description;
    }
}