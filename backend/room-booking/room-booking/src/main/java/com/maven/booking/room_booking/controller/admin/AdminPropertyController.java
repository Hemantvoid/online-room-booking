package com.maven.booking.room_booking.controller.admin;

import org.springframework.web.bind.annotation.*;
import com.maven.booking.room_booking.dto.admin.CreatePropertyRequest;
import com.maven.booking.room_booking.entity.Property;
import com.maven.booking.room_booking.service.admin.AdminPropertyService;

@RestController
@RequestMapping("/api/admin/properties")
@CrossOrigin(origins = "*")
public class AdminPropertyController {

    private final AdminPropertyService service;

    public AdminPropertyController(AdminPropertyService service) {
        this.service = service;
    }

    @PostMapping
    public Property add(@RequestBody CreatePropertyRequest req) {
        return service.addProperty(req);
    }
}
