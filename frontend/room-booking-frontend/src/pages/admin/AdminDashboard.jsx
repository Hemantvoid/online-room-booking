export default function AdminDashboard() {
  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin. Select a section from the menu:</p>

      <div className="card" style={{marginTop: "16px"}}>
        <ul>
          <li><a href="/admin/rooms">Manage Rooms</a></li>
          <li><a href="/admin/properties">Manage Properties</a></li>
          <li><a href="/admin/bookings">Manage Bookings</a></li>
        </ul>
      </div>
    </div>
  );
}
