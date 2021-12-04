// import getAll  from '..src/db/database';
// import { v1 as uuidv1 } from 'uuid';
// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async function login(req, res) {
//     if (req.method === 'POST') {
//         if(!req.body) {
//             res.status(404)
//             res.end('Error')
//             return 
//         }
//         const { username, password } = req.body;
//         const log = await loginUser(username, password);
//         const res = await getToken();
//         if (log) {
//             res.status(200)
//             const token = uuidv1();
//             res.json(token)
//         } else {
//             res.json(retun);
//         }
//     }
// }