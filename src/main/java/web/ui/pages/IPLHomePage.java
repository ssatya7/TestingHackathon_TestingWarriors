package web.ui.pages;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import utils.Players;
import web.ui.elements.IPLHomePageElements;

import java.util.ArrayList;
import java.util.List;

import static utils.FibonacciEvenNumbers.generateFibonacciEvenNumbers;

public class IPLHomePage extends BasePage {
    private final Logger LOGGER = LogManager.getLogger(IPLHomePage.class);

    IPLHomePageElements iplHomePageElements;
    List<Integer> playerDetails = new ArrayList<>();

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
        iplHomePageElements.iplStatsTypeFilterDropDown.scrollIntoView(true);
        iplHomePageElements.iplStatsTypeFilterDropDown.click();
    }

    public void userSelectBattersCheckbox(String battersBowlersCheckBoxOptions) {
        iplHomePageElements.iplBattersCheckBox(battersBowlersCheckBoxOptions);
    }

    public void userSelectCSBListValue(String cSBListValue) {
        iplHomePageElements.userSelectCSBListValue(cSBListValue).click();
    }

    public List<Players> getPlayerStats() {
        List<Players> playersList = new ArrayList<>();
        List<Integer> fibonacciEvenNumbers = generateFibonacciEvenNumbers(30);
        int size = fibonacciEvenNumbers.size();
        fibonacciEvenNumbers.remove(0);
        //int startIndex = size - 3;
        for (int i : fibonacciEvenNumbers) {
            System.out.println(i + " value");
            Players player = new Players(iplHomePageElements.playerNameFromUI(i).getText(),
                    iplHomePageElements.matchesPlayedFromUI(i).getText(),
                    iplHomePageElements.getRunsFromUI(i).getText(),
                    iplHomePageElements.avgFromUI(i).getText(),
                    iplHomePageElements.sRFromUI(i).getText(),
                    iplHomePageElements.hundredsFromUI(i).getText(),
                    iplHomePageElements.fiftiesFromUI(i).getText());
            playersList.add(player);

            System.out.println(iplHomePageElements.playerNameFromUI(i).getText());
            System.out.println(iplHomePageElements.matchesPlayedFromUI(i).getText());
        }
        return playersList;
    }
}