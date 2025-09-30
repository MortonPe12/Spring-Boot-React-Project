package com.example.petboarding.service;

import com.example.petboarding.model.Appointment;
import com.example.petboarding.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    // create new appointment
    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    // update appointment dates
    public Optional<Appointment> updateAppointmentDates(Long id, String newStart, String newEnd) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);

        if (optionalAppointment.isPresent()) {
            Appointment appointment = optionalAppointment.get();
            appointment.setStartDate(java.time.LocalDate.parse(newStart));
            appointment.setEndDate(java.time.LocalDate.parse(newEnd));
            appointmentRepository.save(appointment);
            return Optional.of(appointment);
        }
        return Optional.empty();
    }

    // view appointment by ID
    public Optional<Appointment> getAppointment(Long id) {
        return appointmentRepository.findById(id);
    }

    // view all appointments
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // delete appointment
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}
