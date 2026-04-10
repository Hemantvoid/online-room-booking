package com.maven.booking.room_booking.controller;

import com.maven.booking.room_booking.entity.Room;
import com.maven.booking.room_booking.service.RoomService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    // GET /api/rooms
    // GET /api/rooms?city=Meerut
    @GetMapping
    public List<Room> getRooms(@RequestParam(required = false) String city) {
        if (city != null && !city.isEmpty()) {
            return roomService.getAvailableRoomsByCity(city);
        } else {
            return roomService.getAllAvailableRooms();
        }
    }

    @GetMapping("/{id}")
    public Room getRoomById(@PathVariable Long id) {
        return roomService.getRoomById(id);
    }
}
