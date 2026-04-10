package com.maven.booking.room_booking.dto.admin;

public class CreatePropertyRequest {

    private String name;
    private String propertyType;
    private String address;
    private String city;
    private String state;
    private String pincode;
    private String description;

    public String getName() {
        return name;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public String getAddress() {
        return address;
    }

    public String getCity() {
        return city;
    }

    public String getState() {
        return state;
    }

    public String getPincode() {
        return pincode;
    }

    public String getDescription() {
        return description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setState(String state) {
        this.state = state;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
