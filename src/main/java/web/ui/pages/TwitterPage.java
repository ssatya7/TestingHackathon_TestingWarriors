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
import web.ui.model.TwitterProfile;

import java.util.*;
import java.util.stream.Collectors;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import static utils.FibonacciEvenNumbers.generateFibonacciEvenNumbers;
import static utils.WebDriverUtils.*;

public class TwitterPage extends BasePage {
    private final Logger LOGGER = LogManager.getLogger(TwitterPage.class);

    TwitterElements twitterElements;
    public static WebDriverWait wait = new WebDriverWait(WebDriverRunner.getWebDriver(), 30);
    public static HashMap<String, Integer> hashTagMap = new HashMap<>();

    public TwitterPage(TwitterElements twitterElements) {
        this.twitterElements = twitterElements;
    }

    public String getMostRetweetedTweet() {
        String maxRetweetedTweet = "";
        int maxRetweets = 0;
        HashMap<String, Integer> tweetDetails = new HashMap<>();
        ElementsCollection tweetTexts = $$(By.xpath("//div[contains(@aria-label,'Retweets,') or contains(@aria-label,'reply,') or contains(@aria-label,'likes,')]/parent::div/preceding-sibling::div/div[@data-testid='tweetText']"));
        ElementsCollection tweetsStats = $$(By.xpath("//div[contains(@aria-label,'Retweets,') or contains(@aria-label,'reply,') or contains(@aria-label,'likes,')]"));
        for (int i = 0; i < 10; i++) {
            tweetDetails.putAll(getMostRetweetedTweetInCurrentPage(tweetTexts, tweetsStats));
            // maxRetweetedTweet = getMostRetweetedTweetInCurrentPage(tweetTexts, tweetsStats);
            scrollToEndOfPage();
        }
        int mostRetweets = Collections.max(tweetDetails.values());
        for (Map.Entry<String, Integer> tweet : tweetDetails.entrySet()) {
            if (tweet.getValue() == mostRetweets) {
                maxRetweetedTweet = tweet.getKey();
                maxRetweets = tweet.getValue();
            }
        }
        System.out.println("MOST Retweeted Tweet - " + maxRetweetedTweet + "with Retweets -" + maxRetweets);
        return maxRetweetedTweet;
    }

    private HashMap<String, Integer> getMostRetweetedTweetInCurrentPage(ElementsCollection tweetTexts, ElementsCollection tweetsStats) {
        HashMap<String, Integer> tweets = new HashMap<>();
        System.out.println("No. of Tweets - " + tweetsStats.size());
        for (int i = 0; i < tweetsStats.size(); i++) {
            System.out.println("Current Tweet Retweets - " + getRetweetCount(tweetsStats.get(i).getAttribute("aria-label")));
            tweets.put(tweetTexts.get(i).getText(), getRetweetCount(tweetsStats.get(i).getAttribute("aria-label")));
        }
        return tweets;
    }

    private HashMap<String, Integer> getMostRetweetedLikedInCurrentPage(ElementsCollection tweetTexts, ElementsCollection tweetsStats) {
        HashMap<String, Integer> tweets = new HashMap<>();
        System.out.println("No. of Tweets - " + tweetsStats.size());
        for (int i = 0; i < tweetsStats.size(); i++) {
            System.out.println("Current Tweet Retweets - " + getLikesCount(tweetsStats.get(i).getAttribute("aria-label")));
            tweets.put(tweetTexts.get(i).getText(), getLikesCount(tweetsStats.get(i).getAttribute("aria-label")));
        }
        return tweets;
    }

    public String getMostLikedTweet() {
        String maxLikedTweet = "";
        int maxLikes = 0;
        HashMap<String, Integer> tweetDetails = new HashMap<>();
        ElementsCollection tweetTexts = $$(By.xpath("//div[contains(@aria-label,'Retweets,') or contains(@aria-label,'reply,') or contains(@aria-label,'likes,')]/parent::div/preceding-sibling::div/div[@data-testid='tweetText']"));
        ElementsCollection tweetsStats = $$(By.xpath("//div[contains(@aria-label,'Retweets,') or contains(@aria-label,'reply,') or contains(@aria-label,'likes,')]"));
        for (int i = 0; i < 10; i++) {
            tweetDetails.putAll(getMostRetweetedLikedInCurrentPage(tweetTexts, tweetsStats));
            scrollToEndOfPage();
        }
        int mostRetweets = Collections.max(tweetDetails.values());
        for (Map.Entry<String, Integer> tweet : tweetDetails.entrySet()) {
            if (tweet.getValue() == mostRetweets) {
                maxLikedTweet = tweet.getKey();
                maxLikes = tweet.getValue();
            }
        }
        System.out.println("MOST Liked Tweet - " + maxLikedTweet + "with Likes -" + maxLikes);
        return maxLikedTweet;
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

    public int getRetweetCount(String textFromUI) {
        //100 replies, 1450 Retweets, 9052 likes, 11 bookmarks, 6006793 views
        String retweetCount = "";
        for (String st : textFromUI.split(", ")) {
            if (st.contains("Retweets")) {
                retweetCount = st.replace("Retweets", "").trim();
                break;
            }
        }
        int count = retweetCount.length() > 0 ? Integer.parseInt(retweetCount) : 0;
        return count;
    }

    public int getLikesCount(String textFromUI) {
        //100 replies, 1450 Retweets, 9052 likes, 11 bookmarks, 6006793 views
        String likesCount = "";
        for (String st : textFromUI.split(", ")) {
            if (st.contains("likes")) {
                likesCount = st.replace("likes", "").trim();
                break;
            }
        }
        int count = likesCount.length() > 0 ? Integer.parseInt(likesCount) : 0;
        return count;
    }

    public int getTweetsCount() {
        ElementsCollection tweets = $$(By.xpath("//*[@data-testid='tweet']"));
        return tweets.size();
    }

    public void navToStepINForum() {
        SelenideElement userInput = twitterElements.userName;
        userInput.sendKeys("swaroopsatya3@gmail.com");
        userInput.sendKeys(Keys.ENTER);
        waitUntilPageLoads(3);
        if (twitterElements.mobileInput.isDisplayed()) {
            twitterElements.mobileInput.sendKeys("9502547760");
            twitterElements.mobileInput.sendKeys(Keys.ENTER);
        }
        SelenideElement passowrdInput = twitterElements.password;
        passowrdInput.sendKeys("dravidswaroop07");
        passowrdInput.sendKeys(Keys.ENTER);
        waitUntilPageLoads(10);
        navToStepIN();
    }

    public void navToStepIN() {
        getWebDriver().get("https://twitter.com/explore");
        wait.until(ExpectedConditions.elementToBeClickable(twitterElements.searchInput));
        twitterElements.searchInput.sendKeys("STeP-IN Forum");
        waitUntilPageLoads(2);
        twitterElements.forumId.click();
        wait.until(ExpectedConditions.visibilityOf(twitterElements.retweetsBtn.first()));
    }

    public String getMostUsedHashTagFromStepInForun() {
        String mostUsedHashTag = "";
        ElementsCollection tweetTexts = $$(By.xpath("//div[contains(@aria-label,'Retweets,') or contains(@aria-label,'reply,') or contains(@aria-label,'likes,')]/parent::div/preceding-sibling::div/div[@data-testid='tweetText']"));
        for (int i = 0; i < 10; i++) {
            hashTagMap.putAll(getHashTagCountForTweets(tweetTexts));
            scrollToEndOfPage();
        }
        int maxUsedHashTagCount = Collections.max(hashTagMap.values());
        for (Map.Entry<String, Integer> entry : hashTagMap.entrySet()) {
            if (entry.getValue() == maxUsedHashTagCount) {
                mostUsedHashTag = entry.getKey();
                System.out.println("MostUsedHashTagIs -" + entry.getKey());
            }
        }
        return mostUsedHashTag;
    }

    private HashMap<String, Integer> getHashTagCountForTweets(ElementsCollection tweetTexts) {
        for (SelenideElement tweet : tweetTexts) {
            getHashTagsFromTweet(tweet.getText()).stream().forEach(e -> {
                hashTagMap.computeIfAbsent(e, v -> 1);
                hashTagMap.computeIfPresent(e, (k, v) -> v + 1);
            });
        }
        return hashTagMap;
    }

    private List<String> getHashTagsFromTweet(String tweetText) {
        return Arrays.stream(tweetText.split(" ")).filter(e -> e.startsWith("#")).collect(Collectors.toList());
    }

    public ArrayList<TwitterProfile> getTwitterProfilesToFollow() {
        twitterElements.youMightLikeSection.scrollIntoView(true);
        ArrayList<TwitterProfile> profiles = new ArrayList<>();
        ElementsCollection twitterNames = $$(By.xpath("//*[@data-testid='UserCell']/descendant::span/span[1][not(text()='Follow')]"));
        ElementsCollection twitterHandles = $$(By.xpath("//*[@data-testid='UserCell']//a//span[contains(text(),'@')]"));
        for (int i = 0; i < twitterHandles.size(); i++) {
            String handle = twitterHandles.get(i).getText().replace("@", "").trim();
            String name = twitterNames.get(i).getText();
            twitterNames.get(i).hover();
            waitUntilPageLoads(2);
            profiles.add(new TwitterProfile(name, handle,
                    $(By.xpath("//a[contains(@href,'" + handle + "')]//span[contains(text(),'Following')]/parent::*/preceding-sibling::span")).getText(),
                    $(By.xpath("//a[contains(@href,'" + handle + "')]//span[contains(text(),'Followers')]/parent::*/preceding-sibling::span")).getText()));

            twitterElements.youMightLikeSection.hover();
            waitUntilPageLoads(2);
        }
        return profiles;
    }
}