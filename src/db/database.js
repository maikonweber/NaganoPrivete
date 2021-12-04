const { Pool, Client } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
})


async function getAll() {
  const client = await pool.connect()
  try {
    const result = await client.query('SELECT * FROM leads')
    return result.rows
  } catch (err) {
    console.log(err)
}
}

async function insertLeads(nome, sobrenome, telefone, link, valor, produto, email) {
  const client = await pool.connect()
  let string = `INSERT INTO leads 
  (nome, sobrenome, telefone, link, valor , produto, email) 
  VALUES ($1, $2, $3, $4, $5, $6, $7)` 
  try {
    const result = await client.query(string, [nome, sobrenome, telefone, link, valor, produto, email]);
    return "Inserido Leads"
  } catch (err) {
    console.log(err)
}
}

async function  isUser(email, password) {
  const client = await pool.connect()
  let string = `SELECT * FROM users WHERE email = $1 AND password = $2`
  try {
    const result = await client.query(string, [email, password])
    return result.rows
  }
  catch (err) {
    console.log(err)
  }

  if (result.rows.length > 0) {
    return true
  }
  else {
    return false
  }  
}


  
module.exports = {
  getAll,
  insertLeads,
  isUser

}
