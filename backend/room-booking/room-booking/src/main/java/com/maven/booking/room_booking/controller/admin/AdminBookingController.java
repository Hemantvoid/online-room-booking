package com.maven.booking.room_booking.controller.admin;
import com.maven.booking.room_booking.entity.BookingStatus;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.maven.booking.room_booking.entity.Booking;
import com.maven.booking.room_booking.repository.BookingRepository;
import com.maven.booking.room_booking.service.EmailService;

@RestController
@RequestMapping("/api/admin/bookings")
public class AdminBookingController {

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private EmailService emailService;


    // Get all bookings OR by status
    @GetMapping
    public List<Booking> getBookings(
            @RequestParam(required = false) BookingStatus status
    ) {
        if (status != null) {
            return bookingRepository.findByStatus(status);
        }
        return bookingRepository.findAll();
    }

    // APPROVE booking
    @PutMapping("/{id}/approve")
    public Booking approve(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(BookingStatus.APPROVED);
        bookingRepository.save(booking);

        emailService.sendMail(
            booking.getGuestEmail(),
            "Booking Approved",
            "Dear " + booking.getGuestName() +
            ",\n\nYour booking has been APPROVED.\n" +
            "Booking ID: " + booking.getId() +
            "\nRoom: " + booking.getRoom().getRoomNumber() +
            "\n\nThank you."
        );
		return booking;
        
    }

    // REJECT booking
    @PutMapping("/{id}/reject")
    public Booking reject(@PathVariable Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        booking.setStatus(BookingStatus.CANCELLED);
        emailService.sendMail(
        	    booking.getGuestEmail(),
        	    "Booking Cancelled",
        	    "Sorry, your booking has been cancelled.\nBooking ID: " + booking.getId()
        	);
        return bookingRepository.save(booking);
    }
}
