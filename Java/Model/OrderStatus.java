package Model;

import lombok.Data;
import lombok.NonNull;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:14
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Data
public class OrderStatus {

    @NonNull
    private int id;
    @NonNull
    private String orderStatus;

}
