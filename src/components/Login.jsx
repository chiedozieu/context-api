import React, { useContext, useState } from "react";
import UserContext from "./context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
    console.log( 'username', username)
  }

  return (
    <div className="max-w-md mx-auto max-h-screen justify-center flex flex-col">
      <h2 className="text-3xl font-semibold text-slate-600 text-center my-5">Login</h2>
      <div>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            className="p-2 outline-blue-400 w-full my-2"
          />
      </div>
      
      <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 outline-blue-400 w-full my-2"
          />
      </div>
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">Submit</button>
    </div>
  );
}

export default Login;
