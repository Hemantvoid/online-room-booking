import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("admin", "true");
      alert("logged in");
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <form onSubmit={login} className="card">
      <h2>Admin Login</h2>
      <input className="input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className="input" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="btn">Login</button>
    </form>
  );
}
