
export async function v1_teste(token) {
  console.log(token)
    const response = await fetch(`https://api.muttercorp.online/api/v1/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token
    })
    })
    return await response.json();
  }
  
  export async function loginIn(email, password) {
    const response = await fetch(`https://api.muttercorp.online/api/v1/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })

    })
    return await response.json();
  }
  
  export async function getAllLeads(token) {
    const response = await fetch(`https://api.muttercorp.online/api/v1/data/getAll`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
      'token': `${token}` },
      // get cookie 
     
    })
    return await response.json();
  }
  
  export async function insertLead(data) {
    console.log(data)
    const response = await fetch(`https://api.muttercorp.online/api/v1/sendLead`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify({
        first_name : data.name,
        last_name : data.last_name,
        email : data.email,
        phone : data.phone,
        message : data.message
      })
    })
    return await response.json();
  }
  