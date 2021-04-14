package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:19
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Getter
@Setter
@AllArgsConstructor
public class Address {

    @NonNull
    private int id;
    @NonNull
    private String address;
    @NonNull
    private AreaCode areaCode;

    @Override
    public String toString() {
        return "Address{" +
                "address='" + address + '\'' +
                ", areaCode=" + areaCode +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Address)) return false;
        Address address1 = (Address) o;
        return getAddress().equals(address1.getAddress()) && getAreaCode().equals(address1.getAreaCode());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getAddress(), getAreaCode());
    }
}
