package web.ui.pages;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.WebDriverRunner;
import com.codeborne.selenide.ex.InvalidStateException;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.InvalidArgumentException;
import org.openqa.selenium.JavascriptExecutor;
import web.ui.elements.IPLTeamsElements;
import web.ui.elements.QALoginPageElements;
import web.ui.model.IPLTeams;

import java.util.ArrayList;
import java.util.List;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class IPLTeamsPage extends BasePage {
    private final Logger LOGGER = LogManager.getLogger(IPLTeamsPage.class);

    IPLTeamsElements iplTeamsElements;

    public IPLTeamsPage(IPLTeamsElements iplTeamsElements) {
        this.iplTeamsElements = iplTeamsElements;
    }

    public void clickOnTeamsLink(){
        iplTeamsElements.TeamsLink.last().click();
    }

    public void hoverOnTeam(String nameOfTeam) {
        SelenideElement teamLogo = $$(By.xpath("//img[contains(@src,'"+nameOfTeam+"')]")).first();
        teamLogo.scrollIntoView("true").hover();
    }

    public String getTrohiesWon(String nameOfTeam) {
        SelenideElement teamLogo = $$(By.xpath("//img[contains(@src,'"+nameOfTeam+"')]")).first();
        teamLogo.scrollIntoView("true").hover();
        String yearsOfTrophiesWon = "";
        IPLTeams iplTeam = IPLTeams.parseString(nameOfTeam);
        SelenideElement trophiesAllignment = $(By.xpath("//a[@data-team_name='"+iplTeam.getFullTeamName()+"']//div[@class='trophy-text-align']"));
        if(trophiesAllignment.isDisplayed()) {
            String trophiesFromUI = trophiesAllignment.scrollIntoView(true).getText();
            //2013 | 2015 | 2017 | 2019 | 2020
             yearsOfTrophiesWon = trophiesFromUI.trim().replace(" | ", ",");
             return yearsOfTrophiesWon;
        }
        else {
            throw new InvalidArgumentException("Team haven't won any trophy");
        }
    }
}