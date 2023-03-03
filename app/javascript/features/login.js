import React from 'react'

const Login = () => {
  return (
    <div className="login-form">
      <form>
      <label htmlFor="email">Email
      <input type="email" name="email" id="email" />
      </label>

      <label htmlFor="password">Password
      <input type="password" name="password" id="password" />
      </label>

      <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
