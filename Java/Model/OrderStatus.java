package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:14
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Getter
@Setter
@AllArgsConstructor
public class OrderStatus {

    @NonNull
    private int id;
    @NonNull
    private String orderStatus;

    @Override
    public String toString() {
        return "OrderStatus{" +
                "orderStatus='" + orderStatus + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderStatus)) return false;
        OrderStatus that = (OrderStatus) o;
        return getOrderStatus().equals(that.getOrderStatus());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrderStatus());
    }
}
