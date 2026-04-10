package com.maven.booking.room_booking.controller.admin;
import com.maven.booking.room_booking.entity.BookingStatus;


import org.springframework.web.bind.annotation.*;
import com.maven.booking.room_booking.dto.admin.CreateRoomRequest;
import com.maven.booking.room_booking.entity.Room;
import com.maven.booking.room_booking.service.admin.AdminRoomService;

@RestController
@RequestMapping("/api/admin/rooms")
@CrossOrigin(origins = "*")
public class AdminRoomController {

    private final AdminRoomService service;

    public AdminRoomController(AdminRoomService service) {
        this.service = service;
    }

    @PostMapping
    public Room add(@RequestBody CreateRoomRequest req) {
        return service.addRoom(req);
    }
}
