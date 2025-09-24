import React, { useEffect, useState } from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";

function App() {
  const [appointments, setAppointments] = useState([]);

  // Fetch all appointments from backend
  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:8080/appointments");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Run once when app loads
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Add appointment (called from form)
  const addAppointment = async (appointment) => {
    try {
      const response = await fetch("http://localhost:8080/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointment),
      });
      const newAppointment = await response.json();
      setAppointments([...appointments, newAppointment]);
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pet Boarding Appointments</h1>
      <AppointmentForm onAdd={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
