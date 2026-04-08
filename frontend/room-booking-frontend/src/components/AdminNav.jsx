import { Link, useNavigate } from "react-router-dom";

export default function AdminNav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/"); // Redirect to user site home
  };

  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "12px",
    background: "#333",
    color: "white",
    alignItems: "center"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  };

  return (
    <nav style={navStyle}>
      <Link to="/admin" style={linkStyle}>Dashboard</Link>
      <Link to="/admin/rooms" style={linkStyle}>Rooms</Link>
      <Link to="/admin/properties" style={linkStyle}>Properties</Link>
      <Link to="/admin/bookings" style={linkStyle}>Bookings</Link>
      
      <button 
        onClick={logout}
        style={{ marginLeft: "auto", background: "red", color: "white", border: "none", padding: "6px 12px", cursor: "pointer" }}
      >
        Logout
      </button>
    </nav>
  );
}
