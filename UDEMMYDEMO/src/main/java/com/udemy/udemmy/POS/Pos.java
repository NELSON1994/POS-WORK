package com.udemy.udemmy.POS;


import org.springframework.http.ResponseEntity;

import javax.persistence.Entity;
import java.util.Date;
import java.util.Objects;
@Entity
public class Pos {
    private int id;
    private String serialnumber;
    private String owner;
    private String contact;
    private String manufacturer;
    private Date date;


    public Pos(int id, String serialnumber, String owner, String contact, String manufacturer, Date date) {
        this.id = id;
        this.serialnumber = serialnumber;
        this.owner = owner;
        this.contact = contact;
        this.manufacturer = manufacturer;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public Pos setId(int id) {
        this.id = id;
        return this;
    }

    public String getSerialnumber() {
        return serialnumber;
    }

    public Pos setSerialnumber(String serialnumber) {
        this.serialnumber = serialnumber;
        return this;
    }

    public String getOwner() {
        return owner;
    }

    public Pos setOwner(String owner) {
        this.owner = owner;
        return this;
    }

    public String getContact() {
        return contact;
    }

    public Pos setContact(String contact) {
        this.contact = contact;
        return this;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public Pos setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public Pos setDate(Date date) {
        this.date = date;
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Pos pos = (Pos) o;
        return id == pos.id &&
                Objects.equals(serialnumber, pos.serialnumber) &&
                Objects.equals(owner, pos.owner) &&
                Objects.equals(contact, pos.contact) &&
                Objects.equals(manufacturer, pos.manufacturer) &&
                Objects.equals(date, pos.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, serialnumber, owner, contact, manufacturer, date);
    }


}
