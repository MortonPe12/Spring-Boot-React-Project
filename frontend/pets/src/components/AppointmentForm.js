import React, { useState } from "react";

function AppointmentForm({ onAdd }) {
  const [petName, setPetName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [caretakingNotes, setCaretakingNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = { petName, startDate, endDate, caretakingNotes };
    onAdd(newAppointment);

    // Reset form
    setPetName("");
    setStartDate("");
    setEndDate("");
    setCaretakingNotes("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>New Appointment</h2>
      <div>
        <label>Pet Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Caretaking Notes:</label>
        <textarea
          value={caretakingNotes}
          onChange={(e) => setCaretakingNotes(e.target.value)}
        />
      </div>
      <button type="submit">Add Appointment</button>
    </form>
  );
}

export default AppointmentForm;
