package web.ui.elements;

import com.codeborne.selenide.SelenideElement;
import org.openqa.selenium.By;

import static com.codeborne.selenide.Selenide.$;

public class IPLHomePageElements {
    public final SelenideElement  iplStatsTab = $(By.xpath("//div[@class='site-navbar-wrap']//a[@data-element_text='STATS']"));
    public final SelenideElement  iplSeasonDropDown = $(By.xpath("//div[@class='cSBDisplay ng-binding']"));
    public final SelenideElement  iplStatsTypeFilterDropDown = $(By.xpath("//div[@class='customSelecBox statsTypeFilter']/div[normalize-space()='Aramco Orange Cap']"));
    public final SelenideElement acceptCookies = $(By.xpath("//button[normalize-space()='Accept cookies']"));
    public final SelenideElement playerNameFromUI1222 = $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr[3]"));

    public SelenideElement playerNameFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]//div[@class='st-ply-name ng-binding']"));
    }
    public SelenideElement matchesPlayedFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]/td[3]"));
    }
    public SelenideElement getRunsFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]/td[6]"));
    }
    public SelenideElement avgFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]/td[8]"));
    }
    public SelenideElement sRFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]/td[10]"));
    }
    public SelenideElement hundredsFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]/td[11]"));
    }
    public SelenideElement fiftiesFromUI( Integer value) {
        int playerValue = value+1;
        return $(By.xpath("//table[@class='st-table statsTable ng-scope']/tbody/tr["+playerValue+"]/td[12]"));
    }





    public SelenideElement iplBattersCheckBox(String battersBowlersCheckBoxOptions) {
        return $(By.xpath("//span[@ng-click='statsTypeFilterChange('" + battersBowlersCheckBoxOptions + "')]"));
    }
    public SelenideElement userSelectCSBListValue(String cSBListValue) {
        return $(By.xpath("//div[@class='cSBList active']//div[contains(text(),'" + cSBListValue + "')][1]"));
    }
}
