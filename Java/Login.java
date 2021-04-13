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
    //test logins
    private static final String testUsername = "lukas@gmail.com";
    private static final String testPassword = "Password1!";
    private static final String badUsername = "lukas";
    private static final String badPassword = "password";

    public static void main(String[] args) {
        //TODO: Remove main form login ! ITS ONLY FOR TEST!
        validate(testUsername, testPassword);
        validate(badUsername, badPassword);
    }

    public static void validate(String username, String password) {
        if (fieldNotEmpty(username) && fieldNotEmpty(password)) {
            final String newUsername = removeBadCharacters(username);
            final String newPassword = removeBadCharacters(password);
            if (fieldNotEmpty(newUsername) && fieldNotEmpty(newPassword)) { //checks that the removeBadCharacters did not remove everything
                if (validateUsername(newUsername) && validatePassword(newPassword)) {
                    System.out.println("\nUsername = " + newUsername + "| Password = " + newPassword); //TODO: IS FOR TESTING ONLY, SEND newUsername & newPassword TO THE NEXT CLASS
                } else {
                    errors.add("\nUsername && password was not valid! ");
                }
            } else {
                errors.add("\nInput included only Illegal characters! ");
            }
        } else {
            errors.add("\nInput empty! ");
        }
        System.out.println(errors);
    }

    private static boolean validateUsername(String username) {
        final Pattern regex = Pattern.compile("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
        final Matcher matcher = regex.matcher(username);

        if (matcher.matches()) {
            System.out.println("\n" + username + " matches! ");
            return true;
        } else {
            System.out.println("\n" + username + " dose not match! ");
            errors.add("\n" + username + " did not adhere to username pattern! ");
            return false;
        }

    }

    private static boolean validatePassword(String password) {
        final Pattern regex = Pattern.compile("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,40})");
        final Matcher matcher = regex.matcher(password);

        if (matcher.matches()) {
            System.out.println("\n" + password + " matches! ");
            return true;
        } else {
            System.out.println("\n" + password + " dose not match! ");
            errors.add("\nPassword did not adhere to password pattern ");
            return false;
        }
    }

    private static String removeBadCharacters(String string) {
        String temp = string;
        temp = removeHtml(temp);
        temp = removeSQL(temp);
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

    //todo: remove all SQL code before it reaches the database!
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

    private static boolean fieldNotEmpty(String string) {
        return string.length() > 0;
    }


}
