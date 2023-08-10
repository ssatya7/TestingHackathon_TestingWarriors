package web.ui.elements;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;

public class TwitterElements {
    public ElementsCollection retweetsBtn = $$(By.xpath("//*[@data-testid='retweet']"));

    public SelenideElement searchInput = $(By.xpath("//*[@data-testid='SearchBox_Search_Input']")),
    userName = $(By.xpath("//*[@autocomplete='username']")),
    password = $(By.xpath("//*[@autocomplete='current-password']")),
    mobileInput = $(By.xpath("//*[@data-testid='ocfEnterTextTextInput']")),
    forumId = $(By.xpath("//span[normalize-space()='@stepin_forum']"));
}