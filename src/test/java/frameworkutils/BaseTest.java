package frameworkutils;

import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.WebDriverRunner;
import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.logging.LogType;
import org.openqa.selenium.logging.LoggingPreferences;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import utils.PropertyFileReader;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.InvocationTargetException;
import java.util.Properties;
import java.util.logging.Level;

import static java.lang.invoke.MethodHandles.lookup;

public abstract class BaseTest extends AbstractTestNGCucumberTests {
    private final static Logger logger = LoggerFactory.getLogger(lookup().lookupClass());
    private final static String selenideProperties = "selenide.properties";


    @BeforeSuite
    public void beforeSuite() throws IOException {
        //new ExcelToJsonConverter().getExcelDataAsJsonObject(new File(FrameworkConstants.getTestDataPath()));
    }

    @BeforeClass
    public void setUpClass() {

        System.setProperty("selenide.headless", System.getProperty("headless", "false"));
        String urlFromTC = System.getenv("URL");
        if (urlFromTC != null) {
            System.setProperty("selenide.baseUrl", System.getProperty("baseUrl", urlFromTC));
        } else {
            System.setProperty("selenide.baseUrl", System.getProperty("baseUrl", PropertyFileReader.get("twitterURL")));
            //System.setProperty("selenide.baseUrl", System.getProperty("baseUrl", PropertyFileReader.get("url")));
        }
        System.setProperty("selenide.userName", System.getProperty("userName", PropertyFileReader.get("userName")));
        System.setProperty("selenide.password", System.getProperty("password", PropertyFileReader.get("password")));
        Properties props = new Properties();
        InputStream inputStream = BaseTest.class
                .getClassLoader()
                .getResourceAsStream(selenideProperties);
        try {
            props.load(inputStream);
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (!props.isEmpty()) {
            for (Object propObj : props.keySet()) {
                String prop = String.valueOf(propObj);

                if (!System.getProperties().containsKey(prop)) {
                    System.setProperty(prop, props.getProperty(prop));
                }
            }
        }

        logger.info("Loading selenide properties as {}", selenideProperties);

        // Looking for JS Console errors
        WebDriverManager.chromedriver().setup();
        ChromeOptions option = new ChromeOptions();
        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
        LoggingPreferences logPref = new LoggingPreferences();
        logPref.enable(LogType.BROWSER, Level.SEVERE);
        capabilities.setCapability(CapabilityType.LOGGING_PREFS, logPref);
        option.setCapability(ChromeOptions.CAPABILITY, option);
        WebDriverRunner.setWebDriver(new ChromeDriver(option));
        WebDriverRunner.getWebDriver().manage().window().maximize();
        //Configuration.startMaximized=true;
        Configuration.timeout = 25000;
        super.setUpClass();
    }

    @AfterClass
    public void tearDownClass() {
        if (WebDriverRunner.hasWebDriverStarted()) WebDriverRunner.closeWebDriver();
        super.tearDownClass();
    }

    @AfterSuite
    public void afterSuite() {
        System.out.println("After Suite");
    }
}
