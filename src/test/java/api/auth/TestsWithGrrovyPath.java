package api.auth;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.util.List;
import java.util.Map;

import static io.restassured.RestAssured.get;

public class TestsWithGrrovyPath {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "https://api.football-data.org";
        RestAssured.basePath = "/v2";
        RestAssured.requestSpecification = new RequestSpecBuilder()
                .setContentType("application/json")
                .addHeader("X-Auth-Token", "031c150214154ca0b791a0abc1a8fbff")
                .build();
    }

    /*
    Open Grrovy Playground
    import groovy.json.JsonSlurper
    def jsonSlurper = new JsonSlurper()
    def object = jsonSlurper.parseText('{json file to pares}') */

    @Test
    public void testGPath(){
        Response response =  get("/teams");
        String name = response.path("teams[0].name");
        System.out.println("1st Team Name - "+ name);
        //System.out.println("Team Names - " + response.path("teams.name"));
        //To find no of teams , store above in array list
        List<String> teams = response.path("teams.name");
        System.out.println("Teams size - "+ teams.size());
        // List of Teams and Team details in Map
        List<Map<String,?>> teamsData = response.path("teams");
        //Single team data in Map
        Map<String,?> singleTeamData = response.path("teams.find{it.name == 'Aston Villa FC'}");
        System.out.println("Name Single Team - " + singleTeamData.get("name"));
        //Player in a squad whose jersey no 20
        Response squadResonse = get("/teams/66");
        System.out.println("Player with Jersey 20 in Team 66 - " + squadResonse.path("squad.find{it.shirtNumber==10}.name"));
        //Find player with shirt number min
        System.out.println("Player with shirt number min - " + squadResonse.path("squad.min{it.shirtNumber}.name"));
        // using find all and find in same
        System.out.println("Find all and Find- " + squadResonse.path("squad.findAll{it.shirtNumber > 0}.find{it.name == 'Facundo Pellistri'}.position"));
        System.out.println("Shirt No of Facundo Pellistri- " + squadResonse.path("squad.find{it.name == 'Facundo Pellistri'}.shirtNumber"));
    }
}