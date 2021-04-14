package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:28
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Getter
@Setter
@AllArgsConstructor
public class Order_Contains {

    @NonNull
    private int id;
    @NonNull
    private Orders order;
    @NonNull
    private Product product;
    @NonNull
    private int productAmount;

    @Override
    public String toString() {
        return "Order_Contains{" +
                "order=" + order +
                ", product=" + product +
                ", productAmount=" + productAmount +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Order_Contains)) return false;
        Order_Contains that = (Order_Contains) o;
        return getProductAmount() == that.getProductAmount() && getOrder().equals(that.getOrder()) && getProduct().equals(that.getProduct());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getOrder(), getProduct(), getProductAmount());
    }
}
