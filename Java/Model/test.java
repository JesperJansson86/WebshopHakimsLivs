package Model;

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

        City city = new City(1, "city");
        AreaCode areaCode = new AreaCode(1, "13624", city);
        Address address = new Address(1, "location", areaCode);

        System.out.println();
    }
}
