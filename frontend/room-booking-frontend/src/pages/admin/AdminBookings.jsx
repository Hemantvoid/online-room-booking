import React, { useEffect, useState } from "react";
import axiosClient from "../../api/axiosClient";
import AdminNav from "../../components/AdminNav";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  const load = () => {
    axiosClient
      .get("/admin/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  };

  const approve = (id) => {
  axiosClient
    .put(`/admin/bookings/${id}/approve`)
    .then(load)
    .catch(err => console.error(err));
};

const reject = (id) => {
  axiosClient
    .put(`/admin/bookings/${id}/reject`)
    .then(load)
    .catch(err => console.error(err));
};


  useEffect(() => {
    load();
  }, []);

  return (
    <div className="container">
      <AdminNav />
      <h2>Admin — Manage Bookings</h2>

      {bookings.length === 0 && (
        <div className="card">No bookings found.</div>
      )}

      {bookings.map(b => (
        <div key={b.id} className="card" style={{ marginBottom: 10 }}>
          <p><b>ID:</b> {b.id}</p>
          <p><b>Guest:</b> {b.guestName} ({b.guestPhone})</p>
          <p><b>Room:</b> {b.room?.roomNumber} — {b.room?.property?.name}</p>
          <p><b>Status:</b> {b.status}</p>

          {b.status === "PENDING" && (
    <>
    <button onClick={() => approve(b.id)}>
      Approve
    </button>
    <button onClick={() => reject(b.id)} style={{ marginLeft: 8 }}>
      Cancel
    </button>
  </>
)}

        </div>
      ))}
    </div>
  );
}
