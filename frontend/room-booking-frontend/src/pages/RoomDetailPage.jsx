import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../api/axiosClient";
import BookingForm from "../components/BookingForm";

export default function RoomDetailPage() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    axiosClient
      .get(`/rooms/${id}`)
      .then((res) => setRoom(res.data))
      .catch(() => alert("Failed to load room"));
  }, [id]);

  if (!room) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="card">
        <h2>
          Room {room.roomNumber} — {room.roomType}
        </h2>

        <p><b>Property:</b> {room.property?.name}</p>
        <p><b>City:</b> {room.property?.city}</p>
        <p><b>Price:</b> ₹{room.pricePerNight} / night</p>
        <p><b>Capacity:</b> {room.capacity}</p>
      </div>

      {success && <div className="card">{success}</div>}

      <BookingForm
        room={room}
        onBooked={(booking) => {
          setSuccess(`Booking successful! Booking ID: ${booking.id}`);
        }}
      />
    </div>
  );
}
