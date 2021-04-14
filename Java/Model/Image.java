package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:31
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Getter
@Setter
@AllArgsConstructor
public class Image {

    @NonNull
    private int id;
    @NonNull
    private String image;
    @NonNull
    private Product product;

    @Override
    public String toString() {
        return "Image{" +
                "image='" + image + '\'' +
                ", product=" + product +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Image)) return false;
        Image image1 = (Image) o;
        return getImage().equals(image1.getImage()) && getProduct().equals(image1.getProduct());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getImage(), getProduct());
    }
}
