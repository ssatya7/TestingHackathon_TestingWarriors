package api.task2;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import static io.restassured.RestAssured.given;

public class Team {
    private RequestSpecification requestSpecification = new RequestSpecBuilder()
            .setBaseUri("http://10.244.218.130:8080")
            .setContentType("application/json")
            .build();

    public String getTeam() {
        Response response = given().spec(requestSpecification)
                .when().get("/team");
        return response.path("team");
    }
}