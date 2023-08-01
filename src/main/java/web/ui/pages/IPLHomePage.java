package web.ui.pages;

import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.WebDriverRunner;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.Players;
import web.ui.elements.IPLHomePageElements;

import java.util.ArrayList;
import java.util.List;

import static com.codeborne.selenide.Selenide.$;
import static utils.FibonacciEvenNumbers.generateFibonacciEvenNumbers;

public class IPLHomePage extends BasePage {
    private final Logger LOGGER = LogManager.getLogger(IPLHomePage.class);

    IPLHomePageElements iplHomePageElements;
    List<Integer> playerDetails = new ArrayList<>();
    public static WebDriverWait wait = new WebDriverWait(WebDriverRunner.getWebDriver(), 30);

    public IPLHomePage(IPLHomePageElements qaLoginPageElements) {
        this.iplHomePageElements = qaLoginPageElements;
    }

    public void userClickOnSTATSMenu() {
        iplHomePageElements.iplStatsTab.click();
    }

    public boolean isSeasonTabIsSelectedByDefault() {
        return iplHomePageElements.iplSeasonDropDown.getText().contains("SEASON 2023");
    }

    public void userClickOnIPLStatsTypeFilterDropDown() {
        SelenideElement drpDown = iplHomePageElements.iplStatsTypeFilterDropDown;
        drpDown.scrollIntoView(true);
        wait.until(ExpectedConditions.elementToBeClickable(drpDown));
        drpDown.click();
    }

    public void userSelectBattersCheckbox(String battersBowlersCheckBoxOptions) {
        iplHomePageElements.iplBattersCheckBox(battersBowlersCheckBoxOptions).scrollIntoView("true").click();
    }

    public void userSelectCSBListValue(String cSBListValue) {
        iplHomePageElements.userSelectCSBListValue(cSBListValue).click();
    }

    public List<Players> getPlayerStats() {
        List<Players> playersList = new ArrayList<>();
        List<Integer> fibonacciEvenNumbers = generateFibonacciEvenNumbers(40);
        int size = fibonacciEvenNumbers.size();
        fibonacciEvenNumbers.remove(0);
        System.out.println("Players whose IDs need to be Fetched" + fibonacciEvenNumbers);
        //int startIndex = size - 3;
        for (int i : fibonacciEvenNumbers) {
            System.out.println(i + " value");
            if(i>20){
                SelenideElement ele = $(By.xpath("//a[normalize-space()='View All']")).scrollIntoView(true);
                ele.click();
            }
            iplHomePageElements.playerNameFromUI(i).scrollIntoView(true);
            Players player = new Players(iplHomePageElements.playerNameFromUI(i).getText(),
                    iplHomePageElements.matchesPlayedFromUI(i).getText(),
                    iplHomePageElements.getRunsFromUI(i).getText(),
                    iplHomePageElements.avgFromUI(i).getText(),
                    iplHomePageElements.sRFromUI(i).getText(),
                    iplHomePageElements.hundredsFromUI(i).getText(),
                    iplHomePageElements.fiftiesFromUI(i).getText());
            playersList.add(player);
        }
        playersList.stream().forEach(e -> {
            System.out.println("Details of Pleyer - " + e.getPlayerName());
            System.out.println("Player Name : " + e.getPlayerName());
            System.out.println("Matches Played : " + e.getMatchesPlayed());
            System.out.println("Runs Scored : " + e.getRuns());
            System.out.println("Average : " + e.getAvg());
            System.out.println("Strike rate : " + e.getsR());
            System.out.println("Hundreds Scored : " + e.getHundreds());
            System.out.println("Fifties Scored : " + e.getFifties());
        });
        return playersList;
    }

    public void acceptCookies() {
        wait.until(ExpectedConditions.visibilityOf(iplHomePageElements.acceptCookies));
        iplHomePageElements.acceptCookies.click();
    }
}