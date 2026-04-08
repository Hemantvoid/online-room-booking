import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import RoomCard from "../components/RoomCard";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpg";



export default function HomePage() {
  const [rooms, setRooms] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadRooms = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axiosClient.get("/rooms", {
        params: city ? { city } : {}
      });
      setRooms(res.data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Failed to load rooms");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRooms();
  }, []);

  return (
    <>
    <div className="home-photos">
      <img src={room1} alt="Room 1" />
      <img src={room2} alt="Room 2" />
      <img src={room3} alt="Room 3" />
    </div>

    <div className="container">
      <div style={{ margin: "16px 0" }}>
        <div className="row">
          <input
            className="input col"
            placeholder="City (e.g. Meerut)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn" onClick={loadRooms}>
            Search
          </button>
        </div>
      </div>

      {loading && <div className="card">Loading rooms...</div>}
      {error && <div className="card">{error}</div>}

      {!loading && !error && rooms.length === 0 && (
        <div className="card">No rooms found.</div>
      )}

      {!loading &&
        !error &&
        rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
    </div>
    </>
  );
}
