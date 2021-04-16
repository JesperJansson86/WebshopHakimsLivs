package Model;

import lombok.Data;
import lombok.NonNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:19
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Data
@Entity
public class Address {

    @NonNull
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NonNull
    private String address;
    @NonNull
    private AreaCode areaCode;
}
