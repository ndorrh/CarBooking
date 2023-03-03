import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="container">
      <nav className="navbar">
        <ul>
          <li>
            <NavLink className="Nav-Item" to="/" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>Home
            </NavLink>
          </li>

          <li>
            <NavLink className="Nav-Item" to="/cars" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>Cars
            </NavLink>
          </li>

          <li>
            <NavLink className="Nav-Item" to="/bookings" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>Bookings
            </NavLink>
          </li>

          <li>
            <NavLink className="Nav-Item" to="/users" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>Users
            </NavLink>
          </li>

          <li>
            <NavLink className="Nav-Item" to="/login" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>Login
            </NavLink>
          </li>

          <li>
            <NavLink className="Nav-Item" to="/signup" style={({ isActive }) => (isActive ? { textDecoration: 'underline', color: 'red' } : { color: 'blue' })}>Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
