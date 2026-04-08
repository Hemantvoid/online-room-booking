import React, { useState } from "react";
import axiosClient from "../api/axiosClient";

export default function BookingForm({ room, onBooked }) {
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
  e.preventDefault();

  // ✅ VALIDATION FIRST
  if (!guestName || !guestEmail || !guestPhone) {
    alert("Please fill all guest details");
    return;
  }

  if (!checkInDate || !checkOutDate) {
    alert("Pick check-in and check-out dates");
    return;
  }

  setLoading(true);

  try {
    const payload = {
      roomId: room.id,
      guestName,
      guestEmail,
      guestPhone,
      checkInDate,
      checkOutDate
    };

    const res = await axiosClient.post("/bookings", payload);

    alert("Booking created! ID: " + res.data.id);

    // ✅ notify parent (RoomDetailPage)
    if (onBooked) onBooked(res.data);

  } catch (err) {
    if (err.response) {
      alert(
        err.response.data?.message ||
        err.response.data?.error ||
        "Booking failed"
      );
    } else {
      alert("Network error");
    }
  } finally {
    setLoading(false);
  }
};
{checkInDate && checkOutDate && (
  <div style={{ marginBottom: 12 }}>
    <strong>Total Price:</strong>{" "}
    ₹{room.pricePerNight *
      Math.max(
        0,
        (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
      )}
  </div>
)}



  return (
    <form onSubmit={submit} className="card">
      <h3>Book this room</h3>
      <div style={{ marginBottom: 8 }}>
        <input className="input" placeholder="Your name" value={guestName} onChange={e=>setGuestName(e.target.value)} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <input className="input" placeholder="Email" value={guestEmail} onChange={e=>setGuestEmail(e.target.value)} />
      </div>
      <div style={{ marginBottom: 8 }}>
        <input className="input" placeholder="Phone" value={guestPhone} onChange={e=>setGuestPhone(e.target.value)} />
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input className="input" type="date" value={checkInDate} onChange={e=>setCheckInDate(e.target.value)} />
        <input className="input" type="date" value={checkOutDate} onChange={e=>setCheckOutDate(e.target.value)} />
      </div>

      <div style={{ marginBottom: 12 }}>
        <strong>Price per night:</strong> ₹{room.pricePerNight}
      </div>

      <button className="btn" type="submit" disabled={loading}>
        {loading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
}
