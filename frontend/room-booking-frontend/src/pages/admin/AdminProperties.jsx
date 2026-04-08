import { useState } from "react";
import axiosClient from "../../api/axiosClient";

export default function AdminProperties() {
  const [form, setForm] = useState({
    name: "",
    propertyType: "HOTEL",
    address: "",
    city: "",
    state: "",
    pincode: "",
    description: ""
  });

  const submit = async () => {
    await axiosClient.post("/admin/properties", form);
    alert("Property added successfully");
  };

  return (
    <div className="container">
      <h3>Add Property</h3>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={(e) =>
            setForm({ ...form, [key]: e.target.value })
          }
        />
      ))}

      <button onClick={submit}>Save</button>
    </div>
  );
}
