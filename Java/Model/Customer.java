package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:21
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Getter
@Setter
@AllArgsConstructor
public class Customer {

    @NonNull
    private int id;
    @NonNull
    private String firstName;
    @NonNull
    private String lastName;
    @NonNull
    private Address address;
    @NonNull
    private String email;
    @NonNull
    private String Password;
    @NonNull
    private Boolean loyalCustomer;
    @NonNull
    private Boolean adminStatus;

    @Override
    public String toString() {
        return "Customer{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address=" + address +
                ", email='" + email + '\'' +
                ", loyalCustomer=" + loyalCustomer +
                ", adminStatus=" + adminStatus +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Customer)) return false;
        Customer customer = (Customer) o;
        return getFirstName().equals(customer.getFirstName()) && getLastName().equals(customer.getLastName()) && getAddress().equals(customer.getAddress()) && getEmail().equals(customer.getEmail()) && getPassword().equals(customer.getPassword()) && getLoyalCustomer().equals(customer.getLoyalCustomer()) && getAdminStatus().equals(customer.getAdminStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFirstName(), getLastName(), getAddress(), getEmail(), getPassword(), getLoyalCustomer(), getAdminStatus());
    }
}
