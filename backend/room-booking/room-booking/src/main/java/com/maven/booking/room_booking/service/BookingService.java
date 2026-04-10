package com.maven.booking.room_booking.service;

import com.maven.booking.room_booking.dto.BookingRequest;
import com.maven.booking.room_booking.entity.Booking;
import com.maven.booking.room_booking.entity.BookingStatus;
import com.maven.booking.room_booking.entity.Room;
import com.maven.booking.room_booking.repository.BookingRepository;
import com.maven.booking.room_booking.repository.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private EmailService emailService;

    public Booking createBooking(BookingRequest request) {

        // 1. Find room
        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        // 2. Create booking object
        Booking booking = new Booking();
        booking.setRoom(room);
        booking.setGuestName(request.getGuestName());
        booking.setGuestEmail(request.getGuestEmail());
        booking.setGuestPhone(request.getGuestPhone());
        booking.setCheckInDate(request.getCheckInDate());
        booking.setCheckOutDate(request.getCheckOutDate());
        booking.setStatus(BookingStatus.PENDING);

        // 3. Save booking
        Booking savedBooking = bookingRepository.save(booking);

        // 4. Send email to user
     // 4. Send email to user
        try {
            emailService.sendMail(
                savedBooking.getGuestEmail(),
                "Booking Request Submitted",
                "Dear " + savedBooking.getGuestName() +
                ",\n\nYour booking request has been submitted successfully.\n" +
                "Booking ID: " + savedBooking.getId() +
                "\nStatus: PENDING\n\nThank you."
            );
        } catch (Exception e) {
            System.out.println("Email failed: " + e.getMessage());
        }


        // 5. Return saved booking
        return savedBooking;
    }
}
