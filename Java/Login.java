import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*
 * Created by Lukas Aronsson
 * Date: 12/04/2021
 * Time: 14:47
 * Project: WebshopHakimsLivs
 * Copyright: MIT
 */

/**
 * Login Validation
 */
public class Login {

    private static final ArrayList<String> errors = new ArrayList<>();
    //test login
    private static final String testUsername = "lukas@gmail.com";
    private static final String testPassword = "Password1!";

    public static void main(String[] args) {
        //TODO: Remove main form login ! ITS ONLY FOR TEST!

        validate(testUsername, testPassword);

        System.out.println(errors);

    }

    public static void validate(String username, String password) {
        if (fieldNotEmpty(username) && fieldNotEmpty(password)) {
            validateUsername(removeBadCharacters(username));
            validatePassword(removeBadCharacters(password));
        } else {
            errors.add("\nInput empty! ");
        }

    }

    private static void validateUsername(String username) {
        final Pattern regex = Pattern.compile("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        final Matcher matcher = regex.matcher(username);

        if (matcher.matches()) {
            System.out.println("\n" + username + " matches");
        } else {
            System.out.println("\n" + username + " dose not match");
            errors.add("\n" + username + " did not adhere to username pattern ");
        }

    }

    private static void validatePassword(String password) {
        final Pattern regex = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,40})");
        final Matcher matcher = regex.matcher(password);

        if (matcher.matches()) {
            System.out.println("\n" + password + " matches");
        } else {
            System.out.println("\n" + password + " dose not match");
            errors.add("\nPassword did not adhere to password pattern ");

        }
    }

    private static String removeBadCharacters(String string) {
        String temp = string;
        temp = removeHtml(temp);
        temp = removeSQL(temp);
        temp = removeOther(temp);
        return temp;
    }

    private static String removeHtml(String string) {
        final String regex = "/(<([^>]+)>)/gi, \"\"";
        final Pattern pattern = Pattern.compile(regex);
        final Matcher matcher = pattern.matcher(string);

        if (matcher.find()) {
            errors.add("\nInputted String included html elements! ");
            return string.replaceAll(regex, "");
        } else {
            return string;
        }
    }

    //todo: remove harmful sql code before it reaches the database!
    private static String removeSQL(String string) {
        final String regex = "";
        final Pattern pattern = Pattern.compile(regex);
        final Matcher matcher = pattern.matcher(string);

        if (matcher.find()) {
            errors.add("\nInputted String included SQL elements! ");
            return string.replaceAll(regex, "");
        } else {
            return string;
        }
    }

    //todo: remove other harmful code (have not yet figured it out !
    private static String removeOther(String string) {
        final String regex = "";
        final Pattern pattern = Pattern.compile(regex);
        final Matcher matcher = pattern.matcher(string);

        if (matcher.find()) {
            errors.add("\nInputted String included bad elements! ");
            return string.replaceAll(regex, "");
        } else {
            return string;
        }
    }

    private static boolean fieldNotEmpty(String string) {
        return string.length() > 0;
    }


}
