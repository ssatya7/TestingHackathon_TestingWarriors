package web.ui.elements;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class IPLTeamsElements {
    public ElementsCollection TeamsLink = $$(By.xpath("//*[@href='https://www.iplt20.com/teams' and text()='TEAMS']"));
}
