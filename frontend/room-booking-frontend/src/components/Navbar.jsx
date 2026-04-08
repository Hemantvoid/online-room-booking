import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ background: "#222", color: "white", padding: "10px 20px" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "600" }}>Room Booking</Link>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home </Link>
        <Link to="/my-bookings"style={{ color: "white" }}> My Bookings</Link>
        <Link to="/admin-login">  Admin</Link>

      </div>
    </div>
  );
}
