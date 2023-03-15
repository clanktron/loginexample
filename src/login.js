import { useState } from "react";

const Login = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const login = async (username, password) => {
   await fetch('http://localhost:4000/login', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
         username: username,
         password: password,
      }),
   })
      .then((data) => console.log(data));
};

const handleSubmit = (e) => {
   e.preventDefault();
   login(username, password);
};    

const getLists = async () => {
   await fetch('http://localhost:4000/list', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
         'Content-type': 'application/json',
      },
   })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.err(err));
};

const handlebutton = (e) => {
   e.preventDefault();
   getLists();
};    

return (
   <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
         </form>
        <button onClick={handlebutton}>Get Lists</button>
      </div>
   </div>
);
};

export default Login;
