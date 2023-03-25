import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Map</Link>
        </li>
        <li>
          <Link to="/addAdmin">Add admin</Link>
        </li>
        <li>
          <Link to="/admin">Admin page</Link>
        </li>
        <li>
          <Link to="/adminProfileEdit">Edit profile</Link>
        </li>
        <li>
          <Link to="/forgotPassword">Password Reminder</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/resetPassword">Password reset</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;