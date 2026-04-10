package com.maven.booking.room_booking.repository;

import com.maven.booking.room_booking.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PropertyRepository extends JpaRepository<Property, Long> {

    // find all properties in a city
    List<Property> findByCity(String city);
}
