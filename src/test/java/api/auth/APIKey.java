package api.auth;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.equalTo;

public class APIKey {

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = "https://api.football-data.org";
        RestAssured.basePath = "/v2";
        RestAssured.requestSpecification = new RequestSpecBuilder()
                .setContentType("application/json")
                .addHeader("X-Auth-Token", "031c150214154ca0b791a0abc1a8fbff")
                .build();
    }

    @Test
    public void testAPIKey() {
        get("/teams/66").then().assertThat().statusCode(200)
                .body("name", equalTo("Manchester United FC"));
        Response response = get("/teams/66");
        Assert.assertEquals(response.path("name"), "Manchester United FC");
        JsonPath jsonPath = response.jsonPath();
        Assert.assertEquals(jsonPath.get("name"), "Manchester United FC");
        String respAsStr = response.toString();
    }
}