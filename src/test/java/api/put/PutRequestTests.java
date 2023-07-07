package api.put;

import api.model.Category;
import api.model.Pet;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class PutRequestTests {

    @BeforeClass
    public void setup(){
        RestAssured.baseURI = "https://petstore.swagger.io";
        RestAssured.basePath = "/v2";
        RestAssured.requestSpecification = new RequestSpecBuilder().setContentType("application/json").build();
    }

    @Test
    public void testPutRequest(){
        Category category = new Category(1,"dog");
        Pet pet = new Pet(1234567,"Snopi",category,"available");
        System.out.println("Verifying Post request by creating a new pet !!");
        Response response = given().body(pet)
                .when().post("/pet");
        String status = response.path("status").toString();
        System.out.println("Status of Pet Updated to - " + status );
    }
}