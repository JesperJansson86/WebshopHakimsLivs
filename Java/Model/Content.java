package Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import java.util.Objects;

/**
 * Created by Lukas Aronsson
 * Date: 14/04/2021
 * Time: 16:35
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 **/

@Getter
@Setter
@AllArgsConstructor
public class Content {

    @NonNull
    private int id;
    @NonNull
    private String requirement;

    @Override
    public String toString() {
        return "Content{" +
                "requirement='" + requirement + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Content content)) return false;
        return getRequirement().equals(content.getRequirement());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getRequirement());
    }
}
