package utils;

import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.WebDriverRunner;
import com.google.common.util.concurrent.Uninterruptibles;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.util.Set;
import java.util.concurrent.TimeUnit;

public class WebDriverUtils {

    public static void switchToWindowBasedOnURLSubString(String subString) {
        WebDriver driver = WebDriverRunner.getWebDriver();
        Set<String> windows = driver.getWindowHandles();
        for (String window : windows) {
            driver.switchTo().window(window);
            if (driver.getCurrentUrl().contains(subString)) {
                break;
            }
        }
    }

    public static void refreshCurrentPage() {
        WebDriver driver = WebDriverRunner.getWebDriver();
        driver.get(driver.getCurrentUrl());
    }

    public static boolean retryClicking(SelenideElement eleToClick, SelenideElement eleExpected) {
        boolean result = false;
        int attempts = 0;
        while (attempts < 2) {
            try {
                System.out.println("Clicking on -" + eleToClick);
                eleToClick.click();
                System.out.println("Waiting for -" + eleExpected + "after clicking on -" + eleToClick);
                result = eleExpected.isDisplayed();
                System.out.println("Is Click success -" + result);
                break;
            } catch (StaleElementReferenceException ignored) {
            }
            attempts++;
        }
        return result;
    }

    public static void zoomInBrowser() throws AWTException {
        System.out.println("zooming");
        Robot robot = new Robot();
        System.out.println("About to zoom in");
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_ADD);
        robot.keyRelease(KeyEvent.VK_ADD);
        robot.keyRelease(KeyEvent.VK_CONTROL);
    }

    public static void zoomOutBrowser() throws AWTException {
        System.out.println("zooming");
        Robot robot = new Robot();
        System.out.println("About to zoom out");
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_SUBTRACT);
        robot.keyRelease(KeyEvent.VK_SUBTRACT);
        robot.keyRelease(KeyEvent.VK_CONTROL);
    }

    public static void openNewTab() throws AWTException {
        WebDriver driver = WebDriverRunner.getWebDriver();
        Robot robot = new Robot();
        robot.keyPress(KeyEvent.VK_CONTROL);
        robot.keyPress(KeyEvent.VK_T);
        robot.keyRelease(KeyEvent.VK_CONTROL);
        robot.keyRelease(KeyEvent.VK_T);
    }

    public static void waitUntilPageLoads(int seconds) {
        Uninterruptibles.sleepUninterruptibly(seconds, TimeUnit.SECONDS);
    }

    public static WebDriver getWebDriver() {
        return WebDriverRunner.getWebDriver();
    }

    public static void uploadFile(String fileLocation) {
        try {
            setLocation(fileLocation);
            Robot robot = new Robot();
            robot.keyPress(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_V);
            robot.keyRelease(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_ENTER);
            robot.keyRelease(KeyEvent.VK_ENTER);
        } catch (Exception exp) {
            exp.printStackTrace();
        }
    }

    private static void setLocation(String string) {
        //StringSelection is a class that can be used for copy and paste operations.
        StringSelection stringSelection = new StringSelection(string);
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(stringSelection, null);
    }

    public static void scrollToEndOfPage() {
        JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
        js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
        //js.executeScript("window.scrollBy(0,document.body.scrollHeight)", "");
        waitUntilPageLoads(3);
    }

    public static void scrollToTopOfPage() {
        JavascriptExecutor js = (JavascriptExecutor) getWebDriver();
        js.executeScript("window.scrollTo(0, 0)");
        //js.executeScript("window.scrollBy(0,document.body.scrollHeight)", "");
        waitUntilPageLoads(3);
    }
}