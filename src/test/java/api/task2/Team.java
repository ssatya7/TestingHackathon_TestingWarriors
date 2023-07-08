package api.task2;

import api.model.task2.TeamRequest;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.ArrayList;

import static io.restassured.RestAssured.given;

public class Team {
    private RequestSpecification requestSpecification = new RequestSpecBuilder()
            .setBaseUri("http://10.244.218.130:8080")
            .setContentType("application/json")
            .build();

    public String getTeam() {
        Response response = given().spec(requestSpecification)
                .when().get("/team");
        return response.asPrettyString();
    }

    public void validateResponseCodeForTrophies(String trophiesWon,String teamName){
        System.out.println("Trophies Won" + trophiesWon);
        TeamRequest teamRequest = new TeamRequest(trophiesWon,teamName);
        given().spec(requestSpecification)
                .body(teamRequest)
                .when().post("/teamTrophies").then().statusCode(200);
    }
}