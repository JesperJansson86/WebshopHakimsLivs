package Model;

import lombok.Data;
import lombok.NonNull;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:16
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/
@Data
public class AreaCode {

    @NonNull
    private int id;
    @NonNull
    private String areaCode;
    @NonNull
    private City city;
}
