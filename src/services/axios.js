import axios from 'axios';

export function getApiClient(ctx) {
    const { 'nextauth.token': token } = parseCookies();

    const api =  axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_API_URL}token`,
})

api.interceptors.request.use(config => {
    console.log(config)

    return config;
})

if (token) {
    // inser body in request
    api.body = {
        token: token
    }

}

return api

}