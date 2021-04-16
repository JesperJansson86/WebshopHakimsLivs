package Model;

import lombok.Data;
import lombok.NonNull;

/*
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:03
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 */
@Data
public class Brand {

    @NonNull
    private int id;
    @NonNull
    private String brand;
}
