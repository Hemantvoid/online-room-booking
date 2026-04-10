package com.maven.booking.room_booking.controller;

import com.maven.booking.room_booking.dto.BookingRequest;
import com.maven.booking.room_booking.entity.Booking;
import com.maven.booking.room_booking.repository.BookingRepository;
import com.maven.booking.room_booking.service.BookingService;
import com.maven.booking.room_booking.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:5173")
public class BookingController {

    private final BookingService bookingService;
    private final BookingRepository bookingRepository;
    @Autowired
    private EmailService emailService;


    public BookingController(BookingService bookingService, BookingRepository bookingRepository) {
        this.bookingService = bookingService;
        this.bookingRepository = bookingRepository;
    }

    // Create booking -> returns 201 Created
    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequest request) {
        Booking saved = bookingService.createBooking(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Optional: simple GET to list all bookings for testing
    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> list = bookingRepository.findAll();
        return ResponseEntity.ok(list);
    }
}
