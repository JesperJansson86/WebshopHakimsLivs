package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/*
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:03
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 */
@Getter
@Setter
@AllArgsConstructor
public class Brand {

    @NonNull
    private int id;
    @NonNull
    private String brand;

    @Override
    public String toString() {
        return "Brand{" +
                "brand='" + brand + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Brand brand1)) return false;
        return getBrand().equals(brand1.getBrand());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getBrand());
    }
}
