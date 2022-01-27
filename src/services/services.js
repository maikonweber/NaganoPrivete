
export async function v1_teste(token) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: token
    })
    })
    return await response.json();
  }
  
  export async function loginIn(email, password) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}login`, {
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/getAll`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
      'token': `${token}` },
      // get cookie 
     
    })
    return await response.json();
  }
  
  export async function insertLead(data) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}sendLead`, {
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
  