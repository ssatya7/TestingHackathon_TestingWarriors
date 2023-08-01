package stepdefs;

import api.task2.Team;
import com.codeborne.selenide.testng.ScreenShooter;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.testng.annotations.Listeners;
import web.ui.pages.IPLTeamsPage;
import web.ui.pages.LoginPage;

import java.awt.*;

import static com.codeborne.selenide.Selenide.open;

@Listeners({ScreenShooter.class})
public class MyStepdefs {

    private IPLTeamsPage iplTeamsPage;
    private String nameOfTeam;
    private String trophiesWon;

    public MyStepdefs(IPLTeamsPage iplTeamsPage) {
        this.iplTeamsPage = iplTeamsPage;
    }

    @Given("I launched IPL20 website")
    public void i_launched_IPLWebsite() throws AWTException {
        open("", LoginPage.class);
    }

    @Given("I navigate to Teams tab")
    public void iNavigateToTeamsTab() throws AWTException {
        iplTeamsPage.clickOnTeamsLink();
    }

    @When("I hit IPL20 teams endpoint and retrieve team name")
    public void getTeamNameFromTeamsEndPoint() throws AWTException {
        Team team = new Team();
        nameOfTeam = team.getTeam();
        //nameOfTeam = "CSK";
        System.out.println("Name of team retrieved from Get Request is - " + nameOfTeam);
    }

    @And("I hover on the IPL website with retrieved Team name and pick trophies won by respective team")
    public void getTrophieswon() throws AWTException {
        iplTeamsPage.hoverOnTeam(nameOfTeam);
        trophiesWon = iplTeamsPage.getTrohiesWon(nameOfTeam);
    }

    @And("I send post request with team details and years of Trophies and validate success response")
    public void sendPostReqAndVerifySuccessResponse() throws AWTException {
        Team team = new Team();
        trophiesWon.replaceAll(" , ", "");
        team.validateResponseCodeForTrophies(trophiesWon, nameOfTeam);
    }
}