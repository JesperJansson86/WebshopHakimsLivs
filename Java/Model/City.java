package Model;

import lombok.Data;
import lombok.NonNull;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 15:49
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Data
public class City {

    @NonNull
    private int id;
    @NonNull
    private String city;
}
