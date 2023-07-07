package api.get;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;

public class DataDrivenGetReq {

    RequestSpecification requestSpecification = new RequestSpecBuilder()
            .setBaseUri("http://api.zippopotam.us")
            .setContentType("application/json")
            .build();
    ResponseSpecification responseSpecification = new ResponseSpecBuilder()
            .expectStatusCode(200)
            .build();

    @DataProvider(name = "zipCodeData")
    public Object[][] getData() {
        return new Object[][]{
                {"us", "90210", "California"},
                {"us", "12345", "New York"},
                {"de", "24848", "Schleswig-Holstein"},
                {"ca", "Y1A", "Yukon"}
        };
    }

    @Test(dataProvider = "zipCodeData")
    public void verifyStates(String countryCode, String zipCode, String state) {
        given().spec(requestSpecification)
                .when().get("/" + countryCode + "/" + zipCode)
                .then().spec(responseSpecification).body("places[0].state", equalTo(state));
    }

    //Same can be done using path parameters
    @Test(dataProvider = "zipCodeData")
    public void verifyStatesUsingPathParam(String countryCode, String zipCode, String state) {
        given().spec(requestSpecification)
                .pathParam("countryCode", countryCode)
                .pathParam("zipCode", zipCode)
                .when().get("/{countryCode}/{zipCode}")
                .then().spec(responseSpecification).body("places[0].state", equalTo(state));
    }

    //To Pass one response as input to new Request

    @Test
    public void verifyData() {
        Response response = given().spec(requestSpecification)
                .when().get("/us/90210")
                .then().extract().response();
        int i = response.getStatusCode();
        String country = response.path("country");
        String state = response.path("places[0].state");
        System.out.println(country + state);
    }
}