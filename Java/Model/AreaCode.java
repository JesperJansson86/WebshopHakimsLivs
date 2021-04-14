package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:16
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Getter
@Setter
@AllArgsConstructor
public class AreaCode {

    @NonNull
    private int id;
    @NonNull
    private String areaCode;
    @NonNull
    private City city;

    @Override
    public String toString() {
        return "AreaCode{" +
                "areaCode='" + areaCode + '\'' +
                ", city=" + city +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AreaCode areaCode1)) return false;
        return getAreaCode().equals(areaCode1.getAreaCode()) && getCity().equals(areaCode1.getCity());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAreaCode(), getCity());
    }
}
