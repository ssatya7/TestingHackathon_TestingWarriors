package stepdefs;

import api.task1.PostRequest;
import com.codeborne.selenide.testng.ScreenShooter;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.testng.Assert;
import org.testng.annotations.Listeners;
import utils.Players;

import java.awt.*;
import java.util.ArrayList;

@Listeners({ScreenShooter.class})
public class IPLHomeStepDefs {

    private ArrayList<Players> playersArrayList = new ArrayList<>();
    private String playerName;

  //  LoginPageLogger loginPage;
    private final web.ui.pages.IPLHomePage IplHomePage;

    public IPLHomeStepDefs(web.ui.pages.IPLHomePage qaLoginPage) {
        this.IplHomePage = qaLoginPage;
    }

    @Given("I launched IPL application")
    public void i_launched_IPL_application() throws AWTException {
       // loginPage = open("stats/2023", LoginPageLogger.class);
    }

    @And("User Go to STATS Menu on Top")
    public void userGoToSTATSMenuOnTop() {
        IplHomePage.acceptCookies();
        IplHomePage.userClickOnSTATSMenu();
    }

    @And("User assert that Season Tab is selected by default.")
    public void userAssertThatSeasonTabIsSelectedByDefault() {
        Assert.assertTrue(IplHomePage.isSeasonTabIsSelectedByDefault());
    }

    @And("User select {} Checkbox")
    public void userSelectBattersCheckbox(String BattersBowlersCheckBoxOptions) {
        IplHomePage.userClickOnIPLStatsTypeFilterDropDown();
       // IplHomePage.userSelectBattersCheckbox(BattersBowlersCheckBoxOptions);
    }

    @And("User select {} Value")
    public void userSelectCSBListValue(String cSBListValue) {
        IplHomePage.userSelectCSBListValue(cSBListValue);
    }

    @And("I fetch the data from stats for UI Screen")
    public void iFetchTheDataFromStatsForUIScreen() {
        playersArrayList = IplHomePage.getPlayerStats();
    }

    @When("I create API Request and send Post call")
    public void iHitAPICall() {
      playerName = new PostRequest().getPlayer(playersArrayList);
    }
}