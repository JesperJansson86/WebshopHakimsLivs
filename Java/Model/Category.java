package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:11
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Getter
@Setter
@AllArgsConstructor
public class Category {

    @NonNull
    private int id;
    @NonNull
    private String category;

    @Override
    public String toString() {
        return "Category{" +
                "category='" + category + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Category category1)) return false;
        return getCategory().equals(category1.getCategory());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getCategory());
    }
}
