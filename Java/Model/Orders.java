package Model;

import lombok.Data;
import lombok.NonNull;

import java.time.LocalDate;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:25
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Data
public class Orders {

    @NonNull
    private int id;
    @NonNull
    private LocalDate orderDate;
    @NonNull
    private OrderStatus orderStatus;
    @NonNull
    private Customer customer;

}
