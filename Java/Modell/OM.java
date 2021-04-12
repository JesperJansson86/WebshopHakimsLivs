package Modell;

import java.time.LocalDate;

/*
 * Created by Lukas Aronsson
 * Date: 12/04/2021
 * Time: 09:19
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 */

/**
 * OM Stands for ObjectModel
 * ALl but Product is now made with the new feature called records
 */
public class OM {

    public record City(int id, String city) {
    }

    public record AreaCode(int id, String areaCode, City city) {
    }

    public record Address(int id, String address, AreaCode areaCode) {
    }

    public record Customer(int id, String name, String email, String Password, String Phone, boolean loyalStatus,
                           boolean adminStatus, Address address) {
    }

    public record Content(int id, String variables) {
    }

    public record Store(int id, String Phone, String email, String openHours, Content content) {
    }

    public record Brand(int id, String brand) {
    }

    public record Category(int id, String category) {
    }

    public record Unit(int id, String unit, String longUnit) {
    }

    public record Image(int id, String image, Product product) {
    }

    public record OrderStatus(int id, String OrderStatus) {
    }

    public record Order(int id, LocalDate orderDate, Customer Customer, OrderStatus orderStatus) {
    }

    public record Contains(int id, int productAmount, Product product, Order order) {
    }


}
