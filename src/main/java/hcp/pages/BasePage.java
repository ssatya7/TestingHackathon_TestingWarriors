package hcp.pages;

import com.codeborne.selenide.impl.SelenidePageFactory;

public abstract class BasePage extends SelenidePageFactory {

    protected long minTimeoutToWait = 20 * 1000;
    //Configuration.timeout=10000;
}
