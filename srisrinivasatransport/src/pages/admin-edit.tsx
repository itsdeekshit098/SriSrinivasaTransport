// /pages/admin-edit.tsx
import { useState } from "react";
import { busData, Bus } from "@/data/busData";

const fields = ['rcLink', 'insuranceLink', 'taxLink', 'fcLink'] as const;

export default function AdminEditPage() {
  const [selectedBusNo, setSelectedBusNo] = useState("");
  const [selectedField, setSelectedField] = useState("");
  const [newLink, setNewLink] = useState("");

  const handleUpdate = () => {
    const bus = busData.find(b => b.busNo === selectedBusNo);
    console.log("bus",bus);
    console.log("selectedField", selectedField);
    
    if (!bus || !(selectedField in bus)) return alert("Invalid selection");
    console.log((bus as any)[selectedField] + " => " + newLink);
    (bus as any)[selectedField] = newLink;
    alert("Link updated!");
    console.log("Updated Bus Data:", busData);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Admin: Update Bus Document Link</h2>

      <div>
        <label>Bus No: </label>
        <select value={selectedBusNo} onChange={e => setSelectedBusNo(e.target.value)}>
          <option value="">Select Bus</option>
          {busData.map(bus => (
            <option key={bus.id} value={bus.busNo}>{bus.busNo}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Document Type: </label>
        <select value={selectedField} onChange={e => setSelectedField(e.target.value)}>
          <option value="">Select Field</option>
          {fields.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>

      <div>
        <label>New Link: </label>
        <input value={newLink} onChange={e => setNewLink(e.target.value)} />
      </div>

      <button onClick={handleUpdate}>Update Link</button>
    </div>
  );
}
