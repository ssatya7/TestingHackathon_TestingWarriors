package stepdefs;

import com.codeborne.selenide.testng.ScreenShooter;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import org.testng.Assert;
import org.testng.annotations.Listeners;

import java.awt.*;

@Listeners({ScreenShooter.class})
public class IPLHomeStepDefs {

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
}