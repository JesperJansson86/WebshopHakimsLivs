package Model;

import lombok.Data;
import lombok.NonNull;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:33
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Data
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

}
