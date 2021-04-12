package Modell;

import java.util.Objects;

import static Modell.OM.*;

/*
 * Created by Lukas Aronsson
 * Date: 07/04/2021
 * Time: 11:51
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 */

/**
 * Objekt representation av Product tabellen i från databasen
 */
public class Product {

    /**
     * idn av produkten (primary key från databasen)
     * Om värdet inte sätts så är dens standard värdet 0
     */
    private int id = 0;

    /**
     * namnet på produkten
     * Om värdet inte sätts så är dens standard värdet ""
     */
    private String title = "";

    /**
     * beskrivning av produkten
     * Om värdet inte sätts så är dens standard värdet ""
     */
    private String description = "";

    /**
     * Priset av produkten
     * Om värdet inte sätts så är dens standard värdet 0
     */
    private double price = 0;

    /**
     * Lagerstatus av produkten
     * Om värdet inte sätts så är dens standard värdet 0
     */
    private int quantity = 0;

    /**
     * Storeleks typ av produkten
     * Om värdet inte sätts så är dens standard värdet 0
     */
    private int size = 0;

    /**
     * Märket som har skapat eller paketerat produkten
     * Om värdet inte sätts så är dens standard värdet null
     */
    private Brand brand = null;

    /**
     * Kategorin som produkten är en del av
     * Om värdet inte sätts så är dens standard värdet null
     */
    private Category category = null;

    /**
     * Enheten som produkten är räknad från
     * Om värdet inte sätts så är dens standard värdet null
     */
    private Unit unit = null;

    /**
     * Boolean som sätter om produkten ska vara synlig eller inte
     * Om värdet inte sätts så är dens standard värdet false
     */
    private boolean visibility = false;

    /**
     * Konstruktor som inte tar in några parametrar och tvingar då skaparen av denna instans av objektet att sätta värdet på allt själv i efterhand
     */
    public Product() {
    }

    /**
     * Konstruktor som tar bara in namnet på produkten, allt annat måste skaparen av denna instans av objektet sätta själv
     *
     * @param title namnet på produkten
     */
    public Product(String title) {
        this.title = title;
    }

    /**
     * Konstruktor som bara sätter id och title och lämnar allt annat med deras standardvärden, allt annat måste skaparen av denna instans av objektet sätta själv
     *
     * @param id    idn av produkten (primary key från databasen)
     * @param title namnet på produkten
     */
    public Product(int id, String title) {
        this.id = id;
        this.title = title;
    }

    /**
     * Konstruktor som sätter alla parametrar utom id för produkten
     * (id kommer ha värdet 0)
     *
     * @param title       namnet på produkten
     * @param description beskrivning av produkten
     * @param price       Priset av produkten
     * @param quantity    Lagerstatus av produkten
     * @param size        Storeleks typ av produkten
     * @param brand       Märket som har skapat eller paketerat produkten
     * @param category    Kategorin som produkten är en del av
     * @param unit        Enheten som produkten är räknad från
     * @param visibility  Boolean som sätter om produkten ska vara synlig eller inte
     */
    public Product(String title, String description, double price, int quantity, int size, Brand brand, Category category, Unit unit, boolean visibility) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.brand = brand;
        this.category = category;
        this.unit = unit;
        this.visibility = visibility;
    }

    /**
     * Konstruktor som sätter alla parametrar av produkten
     *
     * @param id          idn av produkten (primary key från databasen)
     * @param title       namnet på produkten
     * @param description beskrivning av produkten
     * @param price       Priset av produkten
     * @param quantity    Lagerstatus av produkten
     * @param size        Storeleks typ av produkten
     * @param brand       Märket som har skapat eller paketerat produkten
     * @param category    Kategorin som produkten är en del av
     * @param unit        Enheten som produkten är räknad från
     * @param visibility  Boolean som sätter om produkten ska vara synlig eller inte
     */
    public Product(int id, String title, String description, double price, int quantity, int size, Brand brand, Category category, Unit unit, boolean visibility) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.brand = brand;
        this.category = category;
        this.unit = unit;
        this.visibility = visibility;
    }

    /**
     * Hämtar värdet på id
     *
     * @return värdet på id som är en int
     */
    public int getId() {
        return id;
    }

    /**
     * Sätter värdet på id
     *
     * @param id värdet som ska sättas som denna produkts id, detta värde är en int
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Hämtar värdet på title
     *
     * @return värdet på title som är en String som representerar namnet av produkten
     */
    public String getTitle() {
        return title;
    }

    /**
     * Sätter värdet på title
     *
     * @param title värdet som sätts som deena produkts title, detta värde är en String
     */
    public void setTitle(String title) {
        this.title = title;
    }

    /**
     * Hämtar värdet på description
     *
     * @return värdet på description som är en String som representerar description av produkten
     */
    public String getDescription() {
        return description;
    }

    /**
     * Sätter värdet på description
     *
     * @param description värdet som sätts som deena produkts description, detta värde är en String
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Hämtar värdet på price
     *
     * @return värdet på price som är en int som representerar price av produkten
     */
    public double getPrice() {
        return price;
    }

    /**
     * Sätter värdet på price
     *
     * @param price värdet som sätts som deena produkts price, detta värde är en int
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * Hämtar värdet på quantity
     *
     * @return värdet på quantity som är en int som representerar quantity av produkten
     */
    public int getQuantity() {
        return quantity;
    }

    /**
     * Sätter värdet på quantity
     *
     * @param quantity värdet som sätts som deena produkts quantity, detta värde är en int
     */
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    /**
     * Hämtar värdet på size
     *
     * @return värdet på size som är en int som representerar size av produkten
     */
    public int getSize() {
        return size;
    }

    /**
     * Sätter värdet på size
     *
     * @param size värdet som sätts som deena produkts size, detta värde är en int
     */
    public void setSize(int size) {
        this.size = size;
    }

    /**
     * Hämtar värdet på brand
     *
     * @return värdet på brand som är en Brand som representerar size av produkten
     */
    public Brand getBrand() {
        return brand;
    }

    /**
     * Sätter värdet på brand
     *
     * @param brand värdet som sätts som deena produkts size, detta värde är en Brand
     */
    public void setBrand(Brand brand) {
        this.brand = brand;
    }

    /**
     * Hämtar värdet på category
     *
     * @return värdet på category som är en Category som representerar category av produkten
     */
    public Category getCategory() {
        return category;
    }

    /**
     * Sätter värdet på category
     *
     * @param category värdet som sätts som deena produkts category, detta värde är en Category
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * Hämtar värdet på unit
     *
     * @return värdet på unit som är en Unit som representerar unit av produkten
     */
    public Unit getUnit() {
        return unit;
    }

    /**
     * Sätter värdet på unit
     *
     * @param unit värdet som sätts som deena produkts unit, detta värde är en Unit
     */
    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    /**
     * Hämtar värdet på visibility
     *
     * @return true om produkten ska vara synlig false om inte
     */
    public boolean isVisibility() {
        return visibility;
    }

    /**
     * Sätter värdet på visibility
     *
     * @param visibility true om produkten ska vara synlig false om inte
     */
    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }

    /**
     * en överskridande av toString så att man kan kan printa en representation av
     *
     * @return retunerar en String som representerar denna product
     */
    @Override
    public String toString() {
        return "Product{" +
                "title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", quantity=" + quantity +
                ", size=" + size +
                ", brand=" + brand.brand() +
                ", category=" + category.category() +
                ", unit=" + unit.unit() + " | " + unit.longUnit() +
                '}';
    }

    /**
     * Kollar om detta objekt är likadant som ett annant object, det andra objektet kan vara en subclass till Product, Den kollar effter allt förutom id och Images
     *
     * @param o det andra objektet
     * @return true om objektet är likadant, false om de inte är likadana
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Product)) return false;
        Product product = (Product) o;
        return Double.compare(product.getPrice(), getPrice()) == 0 && getSize() == product.getSize() && getTitle().equals(product.getTitle()) && getDescription().equals(product.getDescription()) && getBrand().equals(product.getBrand()) && getCategory().equals(product.getCategory()) && getUnit().equals(product.getUnit());
    }

    /**
     * En auto genererad hashCode method som så att objektet kan hashas och får samma hash som ett annant object som är equals till detta.
     *
     * @return en int som är det denna objekts hash kåd.
     */
    @Override
    public int hashCode() {
        return Objects.hash(getTitle(), getPrice(), getSize(), getBrand(), getCategory(), getUnit());
    }
}
