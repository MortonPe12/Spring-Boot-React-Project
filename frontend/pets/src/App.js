import React, { useEffect, useState } from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";


function App() {
  const [appointments, setAppointments] = useState([]);

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    fetch(`${API_BASE_URL}/appointments`)
      .then(res => res.json())
      .then(data => setAppointments(data))
      .catch(err => console.error(err));
  }, [API_BASE_URL]);


  // Fetch all appointments from backend
  const fetchAppointments = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments`);
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
      const response = await fetch(`${API_BASE_URL}/appointments`, {
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

  // Delete appointment
  const deleteAppointment = async (id) => {
    try {
      await fetch(`${API_BASE_URL}/appointments/${id}`, {
        method: "DELETE",
      });
      setAppointments(appointments.filter((appt) => appt.id !== id));
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  // Update appointment
  const updateAppointment = async (id, updatedData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        const updatedAppt = await response.json();
        setAppointments(
          appointments.map((appt) =>
            appt.id === id ? updatedAppt : appt
          )
        );
      }
    } catch (error) {
      console.error("Error updating appointment:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pet Boarding Appointments</h1>
      <AppointmentForm onAdd={addAppointment} />
      <AppointmentList appointments={appointments} onDelete={deleteAppointment} onUpdate={updateAppointment}/>
    </div>
  );

}

export default App;
