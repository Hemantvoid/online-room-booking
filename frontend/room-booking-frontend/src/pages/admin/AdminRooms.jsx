import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function AdminRooms() {
  const [room, setRoom] = useState({
    roomNumber: "",
    roomType: "SINGLE",
    capacity: 1,
    pricePerNight: 1000,
    propertyId: 1
  });

  const submit = async () => {
    await axiosClient.post("/admin/rooms", room);
    alert("Room added successfully");
  };

  return (
    <div className="container">
      <h3>Add Room</h3>

      {Object.keys(room).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={room[key]}
          onChange={(e) =>
            setRoom({ ...room, [key]: e.target.value })
          }
        />
      ))}

      <button onClick={submit}>Save</button>
    </div>
  );
}
