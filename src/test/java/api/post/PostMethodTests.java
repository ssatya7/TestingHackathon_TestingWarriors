package api.post;

import api.model.Category;
import api.model.Pet;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;

public class PostMethodTests {

    @BeforeClass
    public void setup(){
        RestAssured.baseURI = "https://petstore.swagger.io";
        RestAssured.basePath = "/v2";
        RestAssured.requestSpecification = new RequestSpecBuilder().setContentType("application/json").build();
    }

    @Test
    public void createPetUsingPost(){
        Category category = new Category(1,"dog");
        Pet pet = new Pet(1234567891,"Snopi",category,"pending");
        Response response = given().body(pet)
                .when().post("/pet");
        String id = response.path("id").toString();
        System.out.println(id);
    }

    //@Test
    public void testGet(){
        //deserialization
        Pet pet  = get("/pet/1234567").as(Pet.class);
        System.out.println("Pet Name is - " + pet.getName());
    }
}