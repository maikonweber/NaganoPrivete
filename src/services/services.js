export async function v1_teste(from, to) {
    const response = await fetch(`http://143.198.180.153/api/v1`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      headers:{'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp'}
    })
    return await response.json();
  }
  
  export async function loginIn(from, to) {
    const response = await fetch(`http://143.198.180.153/api/v1/confirm`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      headers:{'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp'}
    })
    return await response.json();
  }
  
  export async function getAllLeads(from, to) {
    const response = await fetch(`http://143.198.180.153/api/v1/getAll`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      headers:{'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp'}
    })
    return await response.json();
  }
  
  export async function insertLead(from, to) {
    const response = await fetch(`http://143.198.180.153/api/v1/sendLead`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      headers:{'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp'}
    })
    return await response.json();
  }
  