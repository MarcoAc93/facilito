const login = credentials => {
  return fetch(`http://localhost:4000/api/sessions/create`,{
    method:'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).catch(console.log);
}

const signup = credentials => {
  return fetch(`http://localhost:4000/api/users/create`,{
    method:'POST',
    body: JSON.stringify(credentials),
    headers:{
      'Content-Type':'application/json',
      'Accept': 'application/json'
    }
  }).then(response => {
    return response.json();
  }).catch(console.log);
}

export { login, signup };
