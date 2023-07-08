package stepdefs;

import api.model.task1.Players;
import api.task1.PostRequest;
import com.codeborne.selenide.testng.ScreenShooter;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.testng.Assert;
import org.testng.annotations.Listeners;

import java.awt.*;
import java.util.ArrayList;

import static com.codeborne.selenide.Selenide.open;

@Listeners({ScreenShooter.class})
public class IPLHomeStepDefs {

    PostRequest postRequest;
    ArrayList<Players> playersList;
    private final web.ui.pages.IPLHomePage IplHomePage;

    public IPLHomeStepDefs(web.ui.pages.IPLHomePage qaLoginPage) {
        this.IplHomePage = qaLoginPage;
    }

    @And("User Go to STATS Menu on Top")
    public void userGoToSTATSMenuOnTop() {
        IplHomePage.userClickOnSTATSMenu();
    }

    @And("User assert that Season Tab is selected by default.")
    public void userAssertThatSeasonTabIsSelectedByDefault() {
        Assert.assertTrue(IplHomePage.isSeasonTabIsSelectedByDefault());
    }

    @And("User select {} Checkbox")
    public void userSelectBattersCheckbox(String BattersBowlersCheckBoxOptions) {
        IplHomePage.userClickOnIPLStatsTypeFilterDropDown();
        IplHomePage.userSelectBattersCheckbox(BattersBowlersCheckBoxOptions);
    }

    @And("User select {} Value")
    public void userSelectCSBListValue(String cSBListValue) {
        IplHomePage.userSelectCSBListValue(cSBListValue);
    }

    @And("I fetch the data from stats for UI Screen")
    public void iFetchTheDataFromStatsForUIScreen() {
        IplHomePage.getPlayerStats();
    }

    @And("I get player name from post request")
    public void iGetPlayerNameFromPostRequest() {
        PostRequest postRequest = new PostRequest();
        System.out.println(postRequest.getPlayer(playersList));
    }

    @And("I clicked on the player name which we are getting from JSON")
    public void iClickedOnThePlayerNameWhichWeAreGettingFromJSON() {
        //IplHomePage.clickOnPlayerName();
    }
}