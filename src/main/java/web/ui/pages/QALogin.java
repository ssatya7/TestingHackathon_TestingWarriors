package web.ui.pages;

import com.codeborne.selenide.WebDriverRunner;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.JavascriptExecutor;
import web.ui.elements.QALoginPageElements;

public class QALogin extends BasePage {
    private final Logger LOGGER = LogManager.getLogger(QALogin.class);

    QALoginPageElements qaLoginPageElements;

    public QALogin(QALoginPageElements qaLoginPageElements) {
        this.qaLoginPageElements = qaLoginPageElements;
    }

    public void enterUserNameAndPassword() {
        qaLoginPageElements.userName.sendKeys("admin1");
        qaLoginPageElements.password.sendKeys("admin");
    }

    public void clickLogin() {
        qaLoginPageElements.login.click();
    }

    public boolean isLogoutDisplayed() {

        JavascriptExecutor js = (JavascriptExecutor) WebDriverRunner.getWebDriver();
        System.out.println("Res" + js.executeScript("return performance.navigation.type === performance.navigation.TYPE_RELOAD"));
        System.out.println("Res1" + js.executeScript("performance.navigation.TYPE_RELOAD"));
        return qaLoginPageElements.logout.isDisplayed();
    }
}