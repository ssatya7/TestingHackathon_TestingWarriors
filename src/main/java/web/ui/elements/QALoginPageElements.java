package web.ui.elements;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.$;

public class QALoginPageElements {
    public SelenideElement userName = $(By.id("UserName")),
            password = $(By.name("Password")),
            login = $(By.xpath("//div[contains(text(),'LOG IN')]")),
            logout = $(By.xpath("//span[contains(text(),'Log Out')]"));
}
