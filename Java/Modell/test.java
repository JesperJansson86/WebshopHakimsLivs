package Modell;

import static Modell.OM.*;

/*
 * Created by Lukas Aronsson
 * Date: 07/04/2021
 * Time: 13:46
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 */

/**
 * Test class to show how tp create instances of a record
 */
public class test {


    public static void main(String[] args) {

        Brand brand = new Brand(1, "test");

        Category category = new Category(1, "test");

        Unit unit = new Unit(1, "g", "gram");

        Product product = new Product(1, "title", "description", 200.04, 10, 1, 5, brand, category, unit, false);

        Image image = new Image(1, "testImage", product);

        System.out.println("image product = " + image.product());

        System.out.println("brand = " + brand.brand() + ", BrandId = " + brand.id());
    }
}
