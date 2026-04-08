import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/bookings")
      .then(res => setBookings(res.data))
      .catch(err => console.error(err));
  }, []);

  const badgeStyle = (status) => {
    switch (status) {
      case "APPROVED":
        return { color: "green", fontWeight: "bold" };
      case "PENDING":
        return { color: "orange", fontWeight: "bold" };
      case "CANCELLED":
        return { color: "red", fontWeight: "bold" };
      default:
        return {};
    }
  };

  return (
    <div className="container">
      <h2>My Bookings</h2>

      {bookings.length === 0 && (
        <div className="card">You have no bookings yet.</div>
      )}

      {bookings.map(b => (
        <div key={b.id} className="card" style={{ marginBottom: 12 }}>
          <p><b>Booking ID:</b> {b.id}</p>
          <p><b>Room:</b> {b.room?.roomNumber} — {b.room?.property?.name}</p>
          <p><b>Dates:</b> {b.checkInDate} → {b.checkOutDate}</p>
          <p><b>Total:</b> ₹{b.totalAmount}</p>

          <p>
            <b>Status:</b>{" "}
            <span style={badgeStyle(b.status)}>
              {b.status}
            </span>
          </p>

          {b.status === "PENDING" && (
            <p style={{ color: "#777" }}>
              Waiting for admin approval
            </p>
          )}
          {b.status === "APPROVED" && (
            <p style={{ color: "green" }}>
              ✔ Booking confirmed
            </p>
          )}
          {b.status === "CANCELLED" && (
            <p style={{ color: "red" }}>
              ✖ Booking rejected
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
