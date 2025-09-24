package com.example.petboarding.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Appointment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String petName;
    private LocalDate startDate;
    private LocalDate endDate;

    @Column(length = 1000)
    private String caretakingNotes;

    public Appointment() {}

    public Appointment(String petName, LocalDate startDate, LocalDate endDate, String caretakingNotes) {
        this.petName = petName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.caretakingNotes = caretakingNotes;
    }

    // getters and setters
    public Long getId() { 
        return id; 
    }
    public String getPetName() { 
        return petName; 
    }
    public void setPetName(String petName) { 
        this.petName = petName; 
    }

    public LocalDate getStartDate() { 
        return startDate; 
    }
    public void setStartDate(LocalDate startDate) { 
        this.startDate = startDate; 
    }

    public LocalDate getEndDate() { 
        return endDate; 
    }
    public void setEndDate(LocalDate endDate) { 
        this.endDate = endDate; 
    }

    public String getCaretakingNotes() { 
        return caretakingNotes; 
    }
    public void setCaretakingNotes(String caretakingNotes) { 
        this.caretakingNotes = caretakingNotes; 
    }
}
