import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./common/NavBar/NavBar";
import Login from "./features/login";

const App = () => {
  return (
    <div className="main-container">
      <h1>Car Booking Service</h1>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<h2>React and Rails as two separate apps</h2>}
        />
        <Route path="/cars" element={<h2>Cars</h2>} />
        <Route path="/bookings" element={<h2>Bookings</h2>} />
        <Route path="/users" element={<h2>Users</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<h2>Signup</h2>} />
      </Routes>
    </div>
  );
}

export default App;