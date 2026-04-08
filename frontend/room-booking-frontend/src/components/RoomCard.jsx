import React from "react";
import { useNavigate } from "react-router-dom";

export default function RoomCard({ room }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>
        {room.roomNumber} — {room.roomType}
      </h3>

      <p>Capacity: {room.capacity}</p>
      <p>Price/Night: ₹{room.pricePerNight}</p>
      <p>
        Property: {room.property?.name} — {room.property?.city}
      </p>

      <button
        className="btn"
        onClick={() => navigate(`/rooms/${room.id}`)}
      >
        View
      </button>
    </div>
  );
}
