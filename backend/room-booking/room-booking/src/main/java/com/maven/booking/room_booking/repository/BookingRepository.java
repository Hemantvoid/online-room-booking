package com.maven.booking.room_booking.repository;

import com.maven.booking.room_booking.entity.Booking;
import com.maven.booking.room_booking.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    // Find bookings by status (admin filter)
    List<Booking> findByStatus(Enum status);

    // 🔥 REQUIRED: availability check
    @Query("""
        SELECT b FROM Booking b
        WHERE b.room = :room
          AND b.status <> 'CANCELLED'
          AND (
                :checkIn < b.checkOutDate
            AND :checkOut > b.checkInDate
          )
    """)
    List<Booking> findOverlappingBookings(
            @Param("room") Room room,
            @Param("checkIn") LocalDate checkIn,
            @Param("checkOut") LocalDate checkOut
    );
}
