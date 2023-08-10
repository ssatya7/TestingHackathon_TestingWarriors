package web.ui.pages;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.WebDriverRunner;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.Players;
import web.ui.elements.IPLHomePageElements;
import web.ui.elements.TwitterElements;

import java.util.ArrayList;
import java.util.List;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static utils.FibonacciEvenNumbers.generateFibonacciEvenNumbers;
import static utils.WebDriverUtils.*;

public class TwitterPage extends BasePage {
    private final Logger LOGGER = LogManager.getLogger(TwitterPage.class);

    TwitterElements twitterElements;
    public static WebDriverWait wait = new WebDriverWait(WebDriverRunner.getWebDriver(), 30);

    public TwitterPage(TwitterElements twitterElements) {
        this.twitterElements = twitterElements;
    }

    public String getMostRetweetedTweet() {
        return "";
    }

    public String getMostLikedTweet() {
        return "";
    }

    public void scrollTill50TweetsAreDisplayed() {
        ElementsCollection tweets = twitterElements.retweetsBtn;
        int tweetsCount = getTweetsCount();
        while (tweetsCount <= 50) {
            scrollToEndOfPage();
            tweetsCount = getTweetsCount();
            System.out.println("Tweets Displayed - " + tweetsCount);
        }
    }

    public int getTweetsCount() {
        ElementsCollection tweets = $$(By.xpath("//*[@data-testid='tweet']"));
        return tweets.size();
    }

    public void navToStepINForum() {
        SelenideElement userInput  = twitterElements.userName;
        userInput.sendKeys("swaroopsatya3@gmail.com");
        userInput.sendKeys(Keys.ENTER);
        twitterElements.mobileInput.sendKeys("9502547760");
        twitterElements.mobileInput.sendKeys(Keys.ENTER);
        SelenideElement passowrdInput = twitterElements.password;
        passowrdInput.sendKeys("dravidswaroop07");
        passowrdInput.sendKeys(Keys.ENTER);
        waitUntilPageLoads(10);
        getWebDriver().get("https://twitter.com/explore");
        wait.until(ExpectedConditions.elementToBeClickable(twitterElements.searchInput));
        twitterElements.searchInput.sendKeys("STeP-IN Forum");
        waitUntilPageLoads(2);
        twitterElements.forumId.click();
        wait.until(ExpectedConditions.visibilityOf(twitterElements.retweetsBtn.first()));
        ////*[@role='progressbar']
    }
}