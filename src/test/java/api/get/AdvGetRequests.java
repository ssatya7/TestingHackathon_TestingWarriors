package api.get;

import io.restassured.RestAssured;
import io.restassured.RestAssured.*;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.equalTo;

public class AdvGetRequests {

    @BeforeClass
    public void setup() {
        RestAssured.requestSpecification = new RequestSpecBuilder()
                .setBaseUri("http://api.zippopotam.us")
                .setContentType("application/json")
                .build();

        RestAssured.responseSpecification = new ResponseSpecBuilder()
                .expectStatusCode(200)
                .build();
    }


    @Test
    public void verifyResoponseBody() {
        get("/us/90210")
                .then()
                .body("country", equalTo("United States"))
                .body("'country abbreviation'", equalTo("US"))
                .body("places[0].state", equalTo("California"))
                .contentType(equalTo("application/json"));
    }
}