package com.maven.booking.room_booking.repository;

import com.maven.booking.room_booking.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {

    List<Room> findByStatus(String status);

    // This will generate: select * from rooms join properties where properties.city = ? and rooms.status = ?
    List<Room> findByPropertyCityAndStatus(String city, String status);
}
