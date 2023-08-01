package api.task1;

import api.model.task1.TeamRequest;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utils.Players;

import java.util.ArrayList;

import static io.restassured.RestAssured.given;

public class PostRequest {

    private RequestSpecification requestSpecification = new RequestSpecBuilder()
            .setBaseUri("http://10.244.218.130:8080")
            .setContentType("application/json")
            .build();

    public String getPlayer(ArrayList<Players> players) {
        TeamRequest teamRequest = new TeamRequest("Warriors", "BATTERS", players);
        Response response = given().spec(requestSpecification)
                .body(teamRequest)
                .when().post("/batter");
        return response.asPrettyString();
    }
}