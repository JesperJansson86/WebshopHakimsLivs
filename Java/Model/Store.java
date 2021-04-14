package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:33
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Getter
@Setter
@AllArgsConstructor
public class Store {

    @NonNull
    private int id;
    @NonNull
    private String phone;
    @NonNull
    private String email;
    @NonNull
    private String openHours;
    @NonNull
    private Address address;

    @Override
    public String toString() {
        return "Store{" +
                "phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", openHours='" + openHours + '\'' +
                ", address=" + address +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Store)) return false;
        Store store = (Store) o;
        return getPhone().equals(store.getPhone()) && getEmail().equals(store.getEmail()) && getOpenHours().equals(store.getOpenHours()) && getAddress().equals(store.getAddress());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getPhone(), getEmail(), getOpenHours(), getAddress());
    }
}
