package com.maven.booking.room_booking.service.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maven.booking.room_booking.entity.Booking;
import com.maven.booking.room_booking.entity.BookingStatus;
import com.maven.booking.room_booking.repository.BookingRepository;
import com.maven.booking.room_booking.service.EmailService;

@Service
public class AdminBookingService {
	@Autowired
	private EmailService emailService;


    private final BookingRepository bookingRepo;

    public AdminBookingService(BookingRepository bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    public List<Booking> getAll() {
        return bookingRepo.findAll();
    }

    public Booking approve(Long id) {
        Booking b = bookingRepo.findById(id).orElseThrow();
        b.setStatus(BookingStatus.APPROVED);
        return bookingRepo.save(b);
    }

    public Booking cancel(Long id) {
        Booking b = bookingRepo.findById(id).orElseThrow();
        b.setStatus(BookingStatus.CANCELLED);
        return bookingRepo.save(b);
    }
}
