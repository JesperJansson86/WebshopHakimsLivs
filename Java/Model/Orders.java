package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:25
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Getter
@Setter
@AllArgsConstructor
public class Orders {

    @NonNull
    private int id;
    @NonNull
    private LocalDate orderDate;
    @NonNull
    private OrderStatus orderStatus;
    @NonNull
    private Customer customer;

    @Override
    public String toString() {
        return "Orders{" +
                "orderDate=" + orderDate +
                ", orderStatus=" + orderStatus +
                ", customer=" + customer +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Orders)) return false;
        Orders orders = (Orders) o;
        return getOrderDate().equals(orders.getOrderDate()) && getOrderStatus().equals(orders.getOrderStatus()) && getCustomer().equals(orders.getCustomer());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrderDate(), getOrderStatus(), getCustomer());
    }
}
