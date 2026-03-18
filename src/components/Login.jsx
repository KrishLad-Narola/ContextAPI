import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
import { z } from 'zod'
import { SiSimplelogin } from "react-icons/si";



const loginValidation = z.object({
  username: z.string().min(3, 'Enter a Username with more the 3 Character'),
  password: z.string().min(6, 'password must be an 6 letters or Characters')
                      .max(20,'Password must be an 20 characters')
}); 

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // setUser({username , password})

    const result = loginValidation.safeParse({ username, password })

    if (!result?.success) {
    const ResultErrors = {}
    result.error.errors?.forEach(err => {
      ResultErrors[{err}] = err.message;
    });
    
    setErrors(ResultErrors);
    
    return; 
  }
  setErrors({})
  setUser({ username, password })
  
}
// console.log(username,password);
  return (
    <form className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl mb-4 text-blue-500 text-center">LOGIN<SiSimplelogin /></h1>

      <div className="mb-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username}</p>
        )}

      </div>

      <div className="mb-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>
      <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit} >Submit</button>
      {/* <p id="error-msg" style="color:red; display:none;">Invalid Username or Password</p> */}

    </form>
  )
}

export default Login