/* eslint-disable prettier/prettier */
export function getRandomId(length: number) {
    let result = '';
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characterLength = character.length;
    let counter = 0;

    while(counter < length){
        result += character.charAt(Math.floor(Math.random()*characterLength));
        counter += 1;
    }

    return result;
}