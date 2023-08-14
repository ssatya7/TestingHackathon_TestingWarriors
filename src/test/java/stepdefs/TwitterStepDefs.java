package stepdefs;

import com.codeborne.selenide.testng.ScreenShooter;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import org.testng.annotations.Listeners;
import web.ui.model.TwitterProfile;
import web.ui.pages.TwitterPage;

import java.awt.*;
import java.util.ArrayList;

import static utils.WebDriverUtils.scrollToTopOfPage;
import static utils.WebDriverUtils.zoomOutBrowser;

@Listeners({ScreenShooter.class})
public class TwitterStepDefs {

    private final TwitterPage twitterPage;
    private String mostRetweetedTweet = "";
    private String mostLikedTweet = "";

    public TwitterStepDefs(TwitterPage twitterPage) {
        this.twitterPage = twitterPage;
    }

    @When("I Extract highest used Hashtag from top 50 tweets")
    public void iExtractHashtag() {
        //twitterPage.navToStepIN();
        String mostUsedHashTag = twitterPage.getMostUsedHashTagFromStepInForun();
    }

    @When("I scroll down till top 50 tweets are displayed")
    public void iScroolDownTill50TweetsAreDisplayed() throws AWTException {
        twitterPage.navToStepINForum();
        zoomOutBrowser();
        zoomOutBrowser();
        zoomOutBrowser();
      //  twitterPage.scrollTill50TweetsAreDisplayed();
    }

    @And("I Extract tweet with most {} from top 50 tweets")
    public void extractInfo(String actionItem) {
        if (actionItem.equals("retweets")) {
            mostRetweetedTweet = twitterPage.getMostRetweetedTweet();
        } else {
            twitterPage.navToStepIN();
            mostLikedTweet = twitterPage.getMostLikedTweet();
        }
    }

    @And("I Extract first 3 ppl details on who to follow suggestions")
    public void iExtractFirst3PPLDetails() {
        //twitterPage.navToStepIN();
        ArrayList<TwitterProfile> pplToFollow = twitterPage.getTwitterProfilesToFollow();
        pplToFollow.stream().forEach(e->{
            System.out.println("Name - " + e.getName());
            System.out.println("Handle - " + e.getHandleName());
            System.out.println("Followers Count - " + e.getFollowersCount());
            System.out.println("Following Count - " + e.getFollowingCount());
        });
    }
}