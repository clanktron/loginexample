import React, { useState, useEffect } from 'react';

const App = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const addPosts = async (username, password) => {
   await fetch('http://localhost:4000/user', {
      method: 'POST',
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
   addPosts(username, password);
};    

return (
   <div className="app">
      <div className="add-post-container">
         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Add Post</button>
         </form>
      </div>
   </div>
);
};

export default App;
