import axios from 'axios';
import { parseCookies } from 'nookies';

export async function getApiClient(ctx) {
    const { 'nextauth.token': token } = parseCookies(ctx);
    console.log(ctx)

    const api =  axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
        headers: {
            'Content-Type': 'application/json',
            'token': `${ctx}`
        }
    });
    const result = await api.get('/data/getAll')
    return result.data
   
}