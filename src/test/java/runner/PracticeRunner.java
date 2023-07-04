package runner;


import frameworkutils.BaseTest;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.Test;

@Test
@CucumberOptions(
    features = {"src/test/java/features"},
    glue = {"Practice/stepdefs", "frameworkutils","stepdefs"},
    tags = {"@T"},
    plugin = {
//                "io.qameta.allure.cucumber5jvm.AllureCucumber5Jvm",
    "progress", "summary",
    "json:target/json-report/cucumber.json",
    "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:",
    "rerun:target/rerun.txt"
},
    monochrome = true
)
public class PracticeRunner extends BaseTest {
}