package api.auth;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class BasicAuth {

    @Test
    public void testBasicAuth(){
        given()
                .auth().basic("postman","password")
                .when().get("https://postman-echo.com/basic-auth").then().statusCode(200);
    }
}