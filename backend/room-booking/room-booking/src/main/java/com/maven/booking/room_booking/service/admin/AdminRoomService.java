package com.maven.booking.room_booking.service.admin;

import org.springframework.stereotype.Service;
import com.maven.booking.room_booking.dto.admin.CreateRoomRequest;
import com.maven.booking.room_booking.entity.Room;
import com.maven.booking.room_booking.entity.Property;
import com.maven.booking.room_booking.repository.RoomRepository;
import com.maven.booking.room_booking.repository.PropertyRepository;

@Service
public class AdminRoomService {

    private final RoomRepository roomRepo;
    private final PropertyRepository propertyRepo;

    public AdminRoomService(RoomRepository roomRepo,
                            PropertyRepository propertyRepo) {
        this.roomRepo = roomRepo;
        this.propertyRepo = propertyRepo;
    }

    public Room addRoom(CreateRoomRequest req) {

        Property property = propertyRepo.findById(req.getPropertyId())
            .orElseThrow(() -> new RuntimeException("Property not found"));

        Room r = new Room();
        r.setRoomNumber(req.getRoomNumber());
        r.setRoomType(req.getRoomType());
        r.setCapacity(req.getCapacity());
        r.setPricePerNight(req.getPricePerNight());
        r.setStatus("AVAILABLE");
        r.setProperty(property);

        return roomRepo.save(r);
    }
}
