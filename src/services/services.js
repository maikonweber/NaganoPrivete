export async function v1_teste(from, to) {
    const response = await fetch(`http://143.198.180.153/api/v1`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
   
    })
    return await response.json();
  }
  
  export async function loginIn(email, password) {
    const response = await fetch(`http://143.198.180.153/api/v1/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })

    })
    return await response.json();
  }
  
  export async function getAllLeads(from, to) {
    const response = await fetch(`http://143.198.180.153/api/v1/getAll`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    return await response.json();
  }
  
  export async function insertLead(data) {
    console.log(data)
    const response = await fetch(`http://143.198.180.153/api/v1/sendLead`, {
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
  