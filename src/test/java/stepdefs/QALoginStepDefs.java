package stepdefs;

import com.codeborne.selenide.testng.ScreenShooter;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.testng.Assert;
import org.testng.annotations.Listeners;
import utils.WebDriverUtils;
import web.ui.pages.LoginPage;
import web.ui.pages.QALogin;

import java.awt.*;

import static com.codeborne.selenide.Selenide.open;

@Listeners({ScreenShooter.class})
public class QALoginStepDefs {

    private QALogin qaLoginPage;

    public QALoginStepDefs(QALogin qaLoginPage) {
        this.qaLoginPage = qaLoginPage;
    }

    @Given("I launched pulsepoint application")
    public void i_launched_pulsepoint_application() throws AWTException {
        open("AccountMgmt/Login.aspx", LoginPage.class);
        WebDriverUtils.zoomOutBrowser();
        WebDriverUtils.zoomOutBrowser();
    }

    @When("I enter userName and password in QA demo")
    public void iEnterUserNameAndPasswordInQADemo() {
        qaLoginPage.enterUserNameAndPassword();
    }

    @And("I clicked on login button")
    public void iClickedOnLoginButton() {
        qaLoginPage.clickLogin();
    }

    @Then("I assert that login was successful")
    public void iAssertThatLoginWasSuccessful() {
        Assert.assertTrue(qaLoginPage.isLogoutDisplayed());
    }
}