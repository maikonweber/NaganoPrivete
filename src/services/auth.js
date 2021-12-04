import { v4 as uuid } from 'uuid';
const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export function signinRequest(data) {
    await delay();


    return {
        token: uuid(),
        user : {
            name: 'John Doe',
            email: ''
        }
    };
}
