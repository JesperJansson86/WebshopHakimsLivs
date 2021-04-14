package Model;

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
     * Record som skapar ett "object" som representarar en stad
     *
     * @param id   idn av city i databasen
     * @param city String med namn på staden
     */
    public record City(int id, String city) {
    }

    /**
     * Record som skapar ett "object" som representarar en postKåd
     *
     * @param id       idn av areaCode i databasen
     * @param areaCode int som är postKåden
     * @param city     staden som postKåden är i
     */
    public record AreaCode(int id, int areaCode, City city) {
    }

    /**
     * Record som skapar ett "object" som representarar en address
     *
     * @param id       idn av address i databasen
     * @param address  String som är address
     * @param areaCode areaCode som address är i
     */
    public record Address(int id, String address, AreaCode areaCode) {
    }

    /**
     * Record som skapar ett "object" som representarar en kund
     *
     * @param id          idn av customer i databasen
     * @param firstName   kundens förnamn
     * @param lastName    kundens efternamn
     * @param email       kundens email
     * @param password    kundens password (ska vara hashed)
     * @param phone       kundens mobil nummer
     * @param loyalStatus om kunden är en trogen kund eller inte
     * @param adminStatus om kunden är admin eller inte
     * @param address     address som är linkat till kunden
     */
    public record Customer(int id, String firstName, String lastName, String email, String password, String phone,
                           boolean loyalStatus,
                           boolean adminStatus, Address address) {
    }

    /**
     * Record som skapar ett "object" som representarar Content (KOMMER NOG ATT ÄNDRAS)
     *
     * @param id        idn av content i databasen
     * @param variables krav för kunden att bli en trogenKund
     */
    public record Content(int id, String variables) {
    }

    /**
     * Record som skapar ett "object" som representarar Afären
     *
     * @param id        idn på afären
     * @param phone     mobil nummer till afären
     * @param email     email till hakim
     * @param openHours öppetider för afären
     * @param content   Content som ska vara med och kunna sättas av admin
     */
    public record Store(int id, String phone, String email, String openHours, Content content) {
    }

    /**
     * Record som skapar ett "object" som representarar ett märke
     *
     * @param id    idn av brand i databasen
     * @param brand märket som har skapat eller paketerat en produkt
     */
    public record Brand(int id, String brand) {
    }

    /**
     * Record som skapar ett "object" som representarar en kategori som en produkt kan vara en del av
     *
     * @param id       idn av category i databasen
     * @param category Kategorin som en produkt kan vara indelad i
     */
    public record Category(int id, String category) {
    }

    /**
     * Enheten som produkten är räknad från
     *
     * @param id       idn av unit i databasen
     * @param unit     Enheten som produkten är räknad från (tex g)
     * @param longUnit fullt namn av unit (text gram)
     */
    public record Unit(int id, String unit, String longUnit) {
    }

    /**
     * Record som skapar ett "object" som representerar bild av en produkt
     *
     * @param id      idn av bilden i databasen
     * @param image   String som har en länk till bilden
     * @param product produkt som bilden tillhör
     */
    public record Image(int id, String image, Product product) {
    }

    /**
     * Record som skapar ett "object" som representerar Statusen på beställningen
     *
     * @param id          idn av orderStatus i databasen
     * @param orderStatus String som är Statusen
     */
    public record OrderStatus(int id, String orderStatus) {
    }

    /**
     * Record som skapar ett "object" som representerar en beställning
     *
     * @param id          idn av order i databasen
     * @param orderDate   datumet beställningen var beställt
     * @param customer    Kunden som har beställt
     * @param orderStatus statusen på Beställningen
     */
    public record Order(int id, LocalDate orderDate, Customer customer, OrderStatus orderStatus) {
    }

    /**
     * Record som skapar ett "object" som representerar Contains
     *
     * @param id            idn av contains i databasen
     * @param productAmount antal av produkten
     * @param product       produkten
     * @param order         villken order som produkten är i
     */
    public record Contains(int id, int productAmount, Product product, Order order) {
    }

}
