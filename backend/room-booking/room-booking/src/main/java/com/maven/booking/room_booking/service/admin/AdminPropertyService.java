package com.maven.booking.room_booking.service.admin;

import org.springframework.stereotype.Service;
import com.maven.booking.room_booking.dto.admin.CreatePropertyRequest;
import com.maven.booking.room_booking.entity.Property;
import com.maven.booking.room_booking.repository.PropertyRepository;

@Service
public class AdminPropertyService {

    private final PropertyRepository propertyRepo;

    public AdminPropertyService(PropertyRepository propertyRepo) {
        this.propertyRepo = propertyRepo;
    }

    public Property addProperty(CreatePropertyRequest req) {
        Property p = new Property();
        p.setName(req.getName());
        p.setPropertyType(req.getPropertyType());
        p.setAddress(req.getAddress());
        p.setCity(req.getCity());
        p.setState(req.getState());
        p.setPincode(req.getPincode());
        p.setDescription(req.getDescription());

        return propertyRepo.save(p);
    }
}
