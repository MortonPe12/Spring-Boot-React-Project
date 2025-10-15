import React, { useState } from "react";

function AppointmentList({appointments, onDelete, onUpdate}) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    petName: "",
    startDate: "",
    endDate: "",
    caretakingNotes: "",
  });

  const startEditing = (appt) => {
    setEditingId(appt.id);
    setFormData({
      petName: appt.petName,
      startDate: appt.startDate,
      endDate: appt.endDate,
      caretakingNotes: appt.caretakingNotes,
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editingId, formData);
    setEditingId(null);
  };

  return (
    <div>
      <h2>All Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id}>
              {editingId === appt.id ? (
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    placeholder="Pet Name"
                    required
                    disabled
                  />
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    min="today"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    min="today"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="caretakingNotes"
                    value={formData.caretakingNotes}
                    onChange={handleChange}
                    placeholder="Notes"
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <strong>{appt.petName}</strong> — {appt.startDate} to {appt.endDate}
                  <br />
                  Notes: {appt.caretakingNotes}
                  <br />
                  <button onClick={() => startEditing(appt)}>Edit</button>
                  <button onClick={() => onDelete(appt.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;
