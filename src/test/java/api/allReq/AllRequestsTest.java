package api.allReq;

import api.model.Category;
import api.model.Pet;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;

public class AllRequestsTest {
    @BeforeClass
    public void setup(){
        RestAssured.baseURI = "https://petstore.swagger.io";
        RestAssured.basePath = "/v2";
        RestAssured.requestSpecification = new RequestSpecBuilder().setContentType("application/json").build();
    }

    @Test
    public void TestAllAPIRequests(){
        Category category = new Category(1,"dog");
        Pet pet = new Pet(1234567890,"Kohli",category,"pending");
        System.out.println("Verifying Post request by creating a Pet !!");
        //post
        String petId = given().body(pet)
                .when().post("/pet").path("id").toString();
        System.out.println("Pet successfully created with id - " + petId);
        System.out.println("Verifying Pet Creatrion using Get request !!");
        //get
        String status  = get("/pet/"+petId).as(Pet.class).getStatus();
        System.out.println("Pet Status From get Request is - " + status);
        //put
        Pet updatedPet = new Pet(12345678,"Kohli",category,"available");
        System.out.println("Verifying Pet Status Update using Put request !!");
        String updatedStatus = given().body(updatedPet).when().post("/pet").path("status").toString();
        System.out.println("Status of Pet Updated to - " + updatedStatus );
        System.out.println("Verifying Delete Request by deleting the pet !!");
        //delete
        delete("/pet/"+petId).then().statusCode(200);
        System.out.println("Veryfying Delete operation !!");
        get("/pet/"+petId).then().statusCode(404);
        System.out.println("Pet Deleted");
    }
}