import React from "react";

function AppointmentList({ appointments }) {
  return (
    <div>
      <h2>All Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments yet.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id}>
              <strong>{appt.petName}</strong> — {appt.startDate} to {appt.endDate}
              <br />
              Notes: {appt.caretakingNotes}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;
