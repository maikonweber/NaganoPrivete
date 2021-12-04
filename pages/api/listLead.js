import { getAll } from '../db/database';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function listList(req, res) {
    if (req.method === 'GET') {
        const retun = await getAll();
        console.log(retun);
        res.json(retun);
    }
}
