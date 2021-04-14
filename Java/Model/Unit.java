package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:08
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Getter
@Setter
@AllArgsConstructor
public class Unit {

    @NonNull
    private int id;
    @NonNull
    private String unit;
    @NonNull
    private String longUnit;

    @Override
    public String toString() {
        return "Unit{" +
                "unit='" + unit + '\'' +
                ", longUnit='" + longUnit + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Unit unit1)) return false;
        return getUnit().equals(unit1.getUnit()) && getLongUnit().equals(unit1.getLongUnit());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUnit(), getLongUnit());
    }
}
