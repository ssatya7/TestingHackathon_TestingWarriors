package api.allReq;

import api.model.Category;
import api.model.Pet;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.*;
import static org.hamcrest.CoreMatchers.equalTo;

public class AllRequestsTestUsingMap {
    @BeforeClass
    public void setup(){
        RestAssured.baseURI = "https://petstore.swagger.io";
        RestAssured.basePath = "/v2";
        RestAssured.requestSpecification = new RequestSpecBuilder().setContentType("application/json").build();
    }

    @Test
    public void TestAllAPIRequests(){
        Map<String ,Object> categoryMap = new HashMap<>();
        categoryMap.put("id","1");
        categoryMap.put("name", "Dog");
        Map<String ,Object> petMap = new HashMap<>();
        petMap.put("id",1234567890);
        petMap.put("name","Chokli");
        petMap.put("category",categoryMap);
        petMap.put("status","pending");
        System.out.println("Verifying Post request by creating a Pet !!");
        //post
        String petId = given().body(petMap)
                .when().post("/pet").path("id").toString();
        System.out.println("Pet successfully created with id - " + petId);
        System.out.println("Verifying Pet Creatrion using Get request !!");
        //get
        String status  = get("/pet/"+petId).as(Pet.class).getStatus();
        System.out.println("Pet Status From get Request is - " + status);
        //put
        petMap.put("status","available");
        System.out.println("Verifying Pet Status Update using Put request !!");
        String updatedStatus = given().body(petMap).when().post("/pet").path("status").toString();
        given().body(petMap).when().post("/pet").then().statusCode(200).and().body("status",equalTo("available"));
        System.out.println("Status of Pet Updated to - " + updatedStatus );
        System.out.println("Verifying Delete Request by deleting the pet !!");
        //delete
        delete("/pet/"+petId).then().statusCode(200);
        System.out.println("Veryfying Delete operation !!");
        get("/pet/"+petId).then().statusCode(404);
        System.out.println("Pet Deleted");
    }
}