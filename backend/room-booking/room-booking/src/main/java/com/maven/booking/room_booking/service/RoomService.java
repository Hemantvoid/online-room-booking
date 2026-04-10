package com.maven.booking.room_booking.service;

import com.maven.booking.room_booking.entity.Room;
import com.maven.booking.room_booking.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public List<Room> getAllAvailableRooms() {
        return roomRepository.findByStatus("AVAILABLE");
    }

    public List<Room> getAvailableRoomsByCity(String city) {
        return roomRepository.findByPropertyCityAndStatus(city, "AVAILABLE");
    }

    public Room getRoomById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with id " + id));
    }
}
