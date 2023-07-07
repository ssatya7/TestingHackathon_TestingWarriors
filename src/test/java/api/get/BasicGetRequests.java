package api.get;

import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

public class BasicGetRequests {

    @Test
    public void verifyStatusCode(){
        given().baseUri("http://api.zippopotam.us")
                .when().get("/us/90210")
                .then().assertThat().statusCode(200);
    }

    @Test
    public void verifyResoponseBody(){
        given().baseUri("http://api.zippopotam.us")
                .when().get("/us/90210")
                .then().body("country",equalTo("United States"))
                .body("'country abbreviation'",equalTo("US"))
                .body("places[0].state",equalTo("California"));
        //use Json Path for to validate array values
    }

    @Test
    public void verifyResponseHeaders(){
        given().baseUri("http://api.zippopotam.us")
                .when().get("/us/90210")
                .then().contentType(equalTo("application/json"));
    }

    @Test
    public void testJsonData(){
        given().baseUri("https://petstore.swagger.io")
                .basePath("/v2")
                .accept("application/json")
                .when().get("/pet/123456")
                .then().body("status",equalTo("pending"));
    }

    @Test
    public void testxmlData(){
        given().baseUri("https://petstore.swagger.io")
                .basePath("/v2")
                .accept("application/xml")
                .when().get("/pet/123456")
                .then().body("Pet.status",equalTo("pending"));
    }
}
