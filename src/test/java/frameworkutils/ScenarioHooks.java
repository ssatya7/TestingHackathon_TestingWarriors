package frameworkutils;

import com.codeborne.selenide.WebDriverRunner;
import com.google.gson.JsonObject;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.qameta.allure.Allure;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.Map;

/**
 * ScenarioHooks class
 * <br/>
 *
 * @author Srujan Kumar
 */

public class ScenarioHooks {

    /*
     * This unit of code will be executed before every scenario (Any tag, includes empty)
     *
     */
    @Before
    public void beforeEachScenario(Scenario scenario) throws Exception {

        if (!scenario.getSourceTagNames().isEmpty())
        {
            String testCaseID = scenario.getSourceTagNames().iterator().next();
            testCaseID = testCaseID.substring(1, testCaseID.length());
//            ApplScreenRecorder.startRecording(testCaseID,scenario.getName());
          /*  ArrayList<String> list = new ArrayList<String>(testcasesData.keySet());
            for (Map.Entry<String, JsonObject> entry : testcasesData.entrySet()) {
                if (entry.getKey().contains(testCaseID)) {
                    testData = entry.getValue();
                }
            }*/
        }
        else if(scenario.getSourceTagNames().isEmpty()){


        }
    }


    /*
     * This unit of code will be executed after every scenario where tag is attached
     *
     */
    @After
    public void afterEachScenario(Scenario scenario) throws Exception {
//        ApplScreenRecorder.stopRecording();
        //JavascriptLogsInfo.extractJSLogsInfo();
        //JavascriptLogsInfo.clearConsoleErrors();
        if (scenario.isFailed()) {
//            Allure.addAttachment(scenario.getName(), new ByteArrayInputStream(((TakesScreenshot) WebDriverRunner.getAndCheckWebDriver()).getScreenshotAs(OutputType.BYTES)));

            TakesScreenshot ts = (TakesScreenshot)  WebDriverRunner.getAndCheckWebDriver();
            byte[] src = ts.getScreenshotAs(OutputType.BYTES);
            scenario.attach(src, "image/png", "screenshot");
//            final byte[] screenshot = ((TakesScreenshot) WebDriverRunner.getAndCheckWebDriver()).getScreenshotAs(OutputType.BYTES);
//            scenario.attach(screenshot, "img/png", "screenshot");
        }
        WebDriverRunner.getWebDriver().quit();
    }

}
