package com.example.petboarding.service;

import com.example.petboarding.model.Appointment;
import com.example.petboarding.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
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
    public Optional<Appointment> updateAppointmentDates(Long id, LocalDate newStart, LocalDate newEnd, String newNotes) {
        Optional<Appointment> optionalAppointment = appointmentRepository.findById(id);

        if (optionalAppointment.isPresent()) {
            Appointment appointment = optionalAppointment.get();
            appointment.setStartDate(newStart);
            appointment.setEndDate(newEnd);
            appointment.setCaretakingNotes(newNotes);
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
