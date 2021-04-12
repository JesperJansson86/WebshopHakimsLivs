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

    /**
     * City record
     *
     * @param id
     * @param city
     */
    public record City(int id, String city) {
    }

    /**
     * @param id
     * @param areaCode
     * @param city
     */
    public record AreaCode(int id, String areaCode, City city) {
    }

    /**
     * @param id
     * @param address
     * @param areaCode
     */
    public record Address(int id, String address, AreaCode areaCode) {
    }

    /**
     * @param id
     * @param name
     * @param email
     * @param password
     * @param phone
     * @param loyalStatus
     * @param adminStatus
     * @param address
     */
    public record Customer(int id, String name, String email, String password, String phone, boolean loyalStatus,
                           boolean adminStatus, Address address) {
    }

    /**
     * @param id
     * @param variables
     */
    public record Content(int id, String variables) {
    }

    /**
     * @param id
     * @param phone
     * @param email
     * @param openHours
     * @param content
     */
    public record Store(int id, String phone, String email, String openHours, Content content) {
    }

    /**
     * @param id
     * @param brand
     */
    public record Brand(int id, String brand) {
    }

    /**
     * @param id
     * @param category
     */
    public record Category(int id, String category) {
    }

    /**
     * @param id
     * @param unit
     * @param longUnit
     */
    public record Unit(int id, String unit, String longUnit) {
    }

    /**
     * @param id
     * @param image
     * @param product
     */
    public record Image(int id, String image, Product product) {
    }

    /**
     * @param id
     * @param orderStatus
     */
    public record OrderStatus(int id, String orderStatus) {
    }

    /**
     * @param id
     * @param orderDate
     * @param customer
     * @param orderStatus
     */
    public record Order(int id, LocalDate orderDate, Customer customer, OrderStatus orderStatus) {
    }

    /**
     * @param id
     * @param productAmount
     * @param product
     * @param order
     */
    public record Contains(int id, int productAmount, Product product, Order order) {
    }


}
