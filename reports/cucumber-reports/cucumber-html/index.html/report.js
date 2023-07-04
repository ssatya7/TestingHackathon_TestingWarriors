$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite.feature");
formatter.feature({
  "name": "Buyer Portal Smoke Suite Part1mark",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Clone an existing Tactic",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_013"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.step({
  "name": "I navigate to landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_navigate_to_landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select an existing tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_an_existing_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I cloned existing item",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.CommonStepDefs.i_cloned_existing_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite2.feature");
formatter.feature({
  "name": "Buyer Portal Smoke Suite Part2",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "NPI List Creation from Setup tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_037"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.step({
  "name": "I clicked on setup tab and picked a list",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.SetupPageStepDefs.i_clicked_on_setup_tab_and_picked_a_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select a npi list Teular List",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.SetupPageStepDefs.iSelectANpiListListWithAttributes(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: NPI List not found with - Teular List\r\n\tat com.ppt.enums.NPIListEnum.lambda$parseString$1(NPIListEnum.java:61)\r\n\tat java.base/java.util.Optional.orElseThrow(Optional.java:408)\r\n\tat com.ppt.enums.NPIListEnum.parseString(NPIListEnum.java:60)\r\n\tat stepdefs.SetupPageStepDefs.iSelectANpiListListWithAttributes(SetupPageStepDefs.java:238)\r\n\tat ✽.I select a npi list Teular List(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite2.feature:53)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I verify created list exists",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.SetupPageStepDefs.iVerifyCreatedListExists()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite4.feature");
formatter.feature({
  "name": "Feature: Buyer Portal Smoke Suite Part4",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Creation of New Segment Access Control Using Recording Pixel",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_143"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.step({
  "name": "I navigate to landing Page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_navigate_to_landing_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on admin section",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AdminPageStepDefs.i_clicked_on_admin_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a new segment access control using Recording Pixel option",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AdminPageStepDefs.iCreateANewSegmentAccessControlUsingCRMOption(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can verify segment access control for Recording Pixel",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AdminPageStepDefs.iCanVerifySegmentAccessControl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify user is Able to Create a new HCP 365 Collection and able to see that in Buyer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_144"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.step({
  "name": "I navigate to hcp_365 portal",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.CommonStepDefs.iNavigateToHcp_365Portal()"
});
formatter.result({
  "error_message": "Element should be visible or transparent: visible or have css value opacity\u003d0 {By.xpath: //div[normalize-space()\u003d\u0027HCP365\u0027]}\r\nElement: \u0027\u003cdiv class\u003d\"app_menu_item\" displayed:false\u003e\u003c/div\u003e\u0027\r\nActual value: visible:false, 1\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213455397.0.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213455397.0.html\r\nTimeout: 25 s.\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:94)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsInteractable(WebElementSource.java:112)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:20)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.ppt.core.CommonComponentsPage.navToHCP365Portal(CommonComponentsPage.java:359)\r\n\tat stepdefs.CommonStepDefs.iNavigateToHcp_365Portal(CommonStepDefs.java:61)\r\n\tat ✽.I navigate to hcp_365 portal(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite4.feature:169)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I select hcp Collections tab section",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.HCP365PageStepDefs.iSelectHcpSetupTabSection(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I create a new collection",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.HCP365PageStepDefs.iCreateANewCollection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can verify new collection details in buyer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.HCP365PageStepDefs.iCanVerifyNewCollectionDetailsInBuyer()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Grouped Template Creation from Reports Tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_145"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.step({
  "name": "I clicked on reports tab",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.ReportPageStepDefs.i_clicked_on_reports_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I create a new grouped template",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.ReportPageStepDefs.iCreateANewGroupedTemplate()"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //input[contains(@placeholder,\u0027All Accounts\u0027)]/following::i[@class\u003d\u0027dropdown-icon\u0027]}\r\nExpected: visible or transparent: visible or have css value opacity\u003d0\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213524524.1.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213524524.1.html\r\nTimeout: 25 s.\r\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[contains(@placeholder,\u0027All Accounts\u0027)]/following::i[@class\u003d\u0027dropdown-icon\u0027]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:56)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:133)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:87)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsInteractable(WebElementSource.java:112)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:20)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.ppt.pages.ReportPage.createNewGroupedTemplate(ReportPage.java:314)\r\n\tat stepdefs.ReportPageStepDefs.iCreateANewGroupedTemplate(ReportPageStepDefs.java:52)\r\n\tat ✽.I create a new grouped template(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite4.feature:178)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[contains(@placeholder,\u0027All Accounts\u0027)]/following::i[@class\u003d\u0027dropdown-icon\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPINHYDW0D88\u0027, ip: \u0027192.168.29.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\SATYA_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53330}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: def1f71f51c636e912b3f146d373c444\n*** Element info: {Using\u003dxpath, value\u003d//input[contains(@placeholder,\u0027All Accounts\u0027)]/following::i[@class\u003d\u0027dropdown-icon\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor24.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:65)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:40)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:101)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.impl.WebElementSource.findAndAssertElementIsInteractable(WebElementSource.java:112)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:20)\r\n\tat com.codeborne.selenide.commands.Click.execute(Click.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.ppt.pages.ReportPage.createNewGroupedTemplate(ReportPage.java:314)\r\n\tat stepdefs.ReportPageStepDefs.iCreateANewGroupedTemplate(ReportPageStepDefs.java:52)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I can see created template details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.ReportPageStepDefs.i_can_see_created_template_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite5.feature");
formatter.feature({
  "name": "Targetings Sanity tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Te"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see buyer portal details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_can_see_buyer_portal_details()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Edit Keyword Bid Multiplier lists for Keyword BID MULTIPLIERS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@smoke_115"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to Bid Multiplier section and click add dimension",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_add_bid_multiplier_and_click_add_dimension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select bid multiplier Keywords",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(java.lang.String)"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]}\r\nExpected: exist\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213587631.3.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213587631.3.html\r\nTimeout: 25 s.\r\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:56)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:133)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.codeborne.selenide.Driver.executeJavaScript(Driver.java:23)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:20)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.scrollIntoView(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.selectBidMultiplier(TacticPage.java:312)\r\n\tat stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(BidMultiplierPageStepDefs.java:32)\r\n\tat ✽.I select bid multiplier Keywords(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite5.feature:114)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPINHYDW0D88\u0027, ip: \u0027192.168.29.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\SATYA_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53388}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: becd8addd6b31dc8e81966788e0ef0ed\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor24.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:65)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:40)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:101)\r\n\tat com.codeborne.selenide.commands.GetWrappedElement.execute(GetWrappedElement.java:19)\r\n\tat com.codeborne.selenide.commands.GetWrappedElement.execute(GetWrappedElement.java:13)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.codeborne.selenide.Driver.executeJavaScript(Driver.java:23)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:20)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.scrollIntoView(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.selectBidMultiplier(TacticPage.java:312)\r\n\tat stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(BidMultiplierPageStepDefs.java:32)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate keywords UI layout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.validate_keywords_layout(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add lists bid multiplier to tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.add_lists_to_bid_multiplier()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close right panel",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_close_right_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Keywords values",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.i_should_see_selected_values(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Keywords bid multiplier",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.click_add_bid_multiplier(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I edit Keyword values and save changes",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.edit_multiplier_values_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see edited values exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.i_should_see_edited_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see buyer portal details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_can_see_buyer_portal_details()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify delete Keyword Bid Multiplier lists for Keyword BID MULTIPLIERS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@smoke_116"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to Bid Multiplier section and click add dimension",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_add_bid_multiplier_and_click_add_dimension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select bid multiplier Keywords",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(java.lang.String)"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]}\r\nExpected: exist\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213651488.5.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213651488.5.html\r\nTimeout: 25 s.\r\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:56)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:133)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.codeborne.selenide.Driver.executeJavaScript(Driver.java:23)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:20)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.scrollIntoView(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.selectBidMultiplier(TacticPage.java:312)\r\n\tat stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(BidMultiplierPageStepDefs.java:32)\r\n\tat ✽.I select bid multiplier Keywords(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite5.feature:130)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPINHYDW0D88\u0027, ip: \u0027192.168.29.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\SATYA_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53434}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b98c3e050cf52b1c81084856c0d214a1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Keywords\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor24.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:65)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:40)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:101)\r\n\tat com.codeborne.selenide.commands.GetWrappedElement.execute(GetWrappedElement.java:19)\r\n\tat com.codeborne.selenide.commands.GetWrappedElement.execute(GetWrappedElement.java:13)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.codeborne.selenide.Driver.executeJavaScript(Driver.java:23)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:20)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.scrollIntoView(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.selectBidMultiplier(TacticPage.java:312)\r\n\tat stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(BidMultiplierPageStepDefs.java:32)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate Keywords UI layout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.validate_keywords_layout(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add lists bid multiplier to tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.add_lists_to_bid_multiplier()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close right panel",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_close_right_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Keywords bid multiplier",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.click_add_bid_multiplier(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete Keywords bid multiplier and save changes",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.delete_selected_keyword_save(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "selected list should not exist in Bid Multiplier lists",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.list_should_not_exist_after_deletion()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see buyer portal details",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_can_see_buyer_portal_details()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add Domains and Apps Bid Multiplier lists for Domains and Apps BID MULTIPLIERS",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@smoke_117"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to Bid Multiplier section and click add dimension",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_add_bid_multiplier_and_click_add_dimension()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select bid multiplier Domains and Apps",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(java.lang.String)"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //div[@class\u003d\u0027content\u0027][contains(text(),\u0027Domains and Apps\u0027)]}\r\nExpected: exist\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213718807.7.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213718807.7.html\r\nTimeout: 25 s.\r\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Domains and Apps\u0027)]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:56)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:133)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:136)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.codeborne.selenide.Driver.executeJavaScript(Driver.java:23)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:20)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.scrollIntoView(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.selectBidMultiplier(TacticPage.java:312)\r\n\tat stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(BidMultiplierPageStepDefs.java:32)\r\n\tat ✽.I select bid multiplier Domains and Apps(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/buyer_smoketestsuite5.feature:144)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Domains and Apps\u0027)]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPINHYDW0D88\u0027, ip: \u0027192.168.29.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\SATYA_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53492}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 39920b65c285198a78d71c58d67d631c\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027content\u0027][contains(text(),\u0027Domains and Apps\u0027)]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor24.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:65)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:40)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:101)\r\n\tat com.codeborne.selenide.commands.GetWrappedElement.execute(GetWrappedElement.java:19)\r\n\tat com.codeborne.selenide.commands.GetWrappedElement.execute(GetWrappedElement.java:13)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat com.codeborne.selenide.Driver.executeJavaScript(Driver.java:23)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:20)\r\n\tat com.codeborne.selenide.commands.ScrollIntoView.execute(ScrollIntoView.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.scrollIntoView(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.selectBidMultiplier(TacticPage.java:312)\r\n\tat stepdefs.BidMultiplierPageStepDefs.i_select_bid_multiplier(BidMultiplierPageStepDefs.java:32)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I validate Domains and Apps UI layout",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.validate_keywords_layout(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add domain list to Domains and Apps bid multiplier",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.add_domain_list_domains_apps()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I close right panel",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_close_right_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Domains and Apps values",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.BidMultiplierPageStepDefs.i_should_see_selected_values(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/targetings/Video.feature");
formatter.feature({
  "name": "Video Targetings Test Cases for Smoke",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@video"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add \u003ctargetingRule\u003e Targeting and see that User is able to \u003ctargetType\u003e targets",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I add new \u003ctargetingRule\u003e targeting on tactic",
  "keyword": "When "
});
formatter.step({
  "name": "I \u003ctargetType\u003e targets and save changes",
  "keyword": "And "
});
formatter.step({
  "name": "I assert that entries for \u003ctargetingRule\u003e exists",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete \u003ctargetingRule\u003e targeting from tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I see \u003ctargetingRule\u003e target does not exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "targetType",
        "targetingRule"
      ]
    },
    {
      "cells": [
        "Target Selected",
        "Video Placement"
      ]
    },
    {
      "cells": [
        "Block Selected",
        "Video Placement"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter Video lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Video Placement Targeting and see that User is able to Block Selected targets",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@video"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.step({
  "name": "I add new Video Placement targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Block Selected targets and save changes",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iTargetTypePlacementTargets(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I assert that entries for Video Placement exists",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iAssertThatEntriesForTargetingRuleExists(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete Video Placement targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Video Placement target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/targetings/health_marketplace.feature");
formatter.feature({
  "name": "Health Market place Targetings Test Cases for Smoke",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@healthmarket"
    },
    {
      "name": "@Te"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Everyday Health Targeting For Media and Audience with \u003cAudience Publisher values\u003e and verify the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_182"
    }
  ]
});
formatter.step({
  "name": "I filter a \u003cstatus\u003e line item from landing page",
  "keyword": "And "
});
formatter.step({
  "name": "I filter \u003clineitem\u003e lineitem from Type filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I add new \u003cHealth Marketplace Targetings Type\u003e targeting on tactic",
  "keyword": "When "
});
formatter.step({
  "name": "I target \u003cTarget value\u003e of the values for Media Publisher",
  "keyword": "And "
});
formatter.step({
  "name": "I target \u003cTarget value\u003e of the values for Audience Publisher values for \u003cAudience Publisher values\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I assert that added \u003cHealth Marketplace Targetings Type\u003e target values exist",
  "keyword": "Then "
});
formatter.step({
  "name": "I assert that \u003cAudience Publisher values\u003e exists for \u003cHealth Marketplace Targetings Type\u003e in the tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I delete \u003cHealth Marketplace Targetings Type\u003e targeting from tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I see \u003cHealth Marketplace Targetings Type\u003e target does not exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "lineitem",
        "Health Marketplace Targetings Type",
        "Target value",
        "Audience Publisher values"
      ]
    },
    {
      "cells": [
        "Running",
        "Display",
        "Everyday Health",
        "1",
        "Person"
      ]
    },
    {
      "cells": [
        "Running",
        "Audio",
        "Everyday Health",
        "1",
        "Household"
      ]
    },
    {
      "cells": [
        "Running",
        "Video",
        "Everyday Health",
        "1",
        "Device"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Everyday Health Targeting For Media and Audience with Household and verify the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@healthmarket"
    },
    {
      "name": "@Te"
    },
    {
      "name": "@smoke_182"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter Audio lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new Everyday Health targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I target 1 of the values for Media Publisher",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.target_healthmarket_values(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I target 1 of the values for Audience Publisher values for Household",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.target_audience_values(int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I assert that added Everyday Health target values exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_assert_added_target_exists(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I assert that Household exists for Everyday Health in the tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.iAssertThatAudiencePublisherValuesExistsInTheTactic(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete Everyday Health targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Everyday Health target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "error_message": "Element should not be visible {By.xpath: //div/span[text()\u003d\u0027Everyday Health\u0027]}\r\nElement: \u0027\u003cspan _ngcontent-c29 class\u003d\"target-ellipse\"\u003eEveryday Health\u003c/span\u003e\u0027\r\nActual value: visible:true\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213866358.8.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213866358.8.html\r\nTimeout: 25 s.\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:91)\r\n\tat com.codeborne.selenide.commands.ShouldNot.execute(ShouldNot.java:30)\r\n\tat com.codeborne.selenide.commands.ShouldNot.execute(ShouldNot.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.shouldNotBe(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.assertTargetNotVisible(TacticPage.java:189)\r\n\tat stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(TargetPageStepDefs.java:330)\r\n\tat ✽.I see Everyday Health target does not exist(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/targetings/health_marketplace.feature:81)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Everyday Health Targeting For Media and Audience with Device and verify the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@healthmarket"
    },
    {
      "name": "@Te"
    },
    {
      "name": "@smoke_182"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter Video lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new Everyday Health targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I target 1 of the values for Media Publisher",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.target_healthmarket_values(int)"
});
formatter.result({
  "error_message": "List size mismatch: expected: \u003e 0, actual: 0, collection: By.xpath: //*[@class\u003d\u0027grouped fields\u0027]//following::sui-checkbox\r\nElements: []\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213931292.9.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658213931292.9.html\r\nTimeout: 25 s.\r\n\tat com.codeborne.selenide.collections.SizeGreaterThan.fail(SizeGreaterThan.java:30)\r\n\tat com.codeborne.selenide.ElementsCollection.waitUntil(ElementsCollection.java:175)\r\n\tat com.codeborne.selenide.ElementsCollection.should(ElementsCollection.java:120)\r\n\tat com.codeborne.selenide.ElementsCollection.shouldHave(ElementsCollection.java:97)\r\n\tat com.ppt.pages.TargetPage.targetHealthPlusValues(TargetPage.java:187)\r\n\tat stepdefs.TargetPageStepDefs.target_healthmarket_values(TargetPageStepDefs.java:154)\r\n\tat ✽.I target 1 of the values for Media Publisher(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/targetings/health_marketplace.feature:76)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I target 1 of the values for Audience Publisher values for Device",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.target_audience_values(int,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I assert that added Everyday Health target values exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_assert_added_target_exists(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I assert that Device exists for Everyday Health in the tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.iAssertThatAudiencePublisherValuesExistsInTheTactic(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete Everyday Health targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see Everyday Health target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature_files/smoke/smoke_main/targetings/media_supply.feature");
formatter.feature({
  "name": "Media Supply Targetings Test Cases for Smoke",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Te"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Authentic Brand Safety Targeting and see that User is able to add",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@T"
    }
  ]
});
formatter.step({
  "name": "I filter a \u003cstatus\u003e line item from landing page",
  "keyword": "And "
});
formatter.step({
  "name": "I filter \u003clineitem\u003e lineitem from Type filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I add new \u003cMedia Supply Targetings Type\u003e targeting on tactic",
  "keyword": "When "
});
formatter.step({
  "name": "I add double verify segment ID as 51000000",
  "keyword": "When "
});
formatter.step({
  "name": "I assert that segment id is updated in the tactic",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete \u003cMedia Supply Targetings Type\u003e targeting from tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I see \u003cMedia Supply Targetings Type\u003e target does not exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "lineitem",
        "Media Supply Targetings Type"
      ]
    },
    {
      "cells": [
        "Running",
        "Display",
        "Authentic Brand Safety"
      ]
    },
    {
      "cells": [
        "Running",
        "Video",
        "Authentic Brand Safety"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Authentic Brand Safety Targeting and see that User is able to add",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@T"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter Video lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new Authentic Brand Safety targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add double verify segment ID as 51000000",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.enter_segment_id(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I assert that segment id is updated in the tactic",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iAssertThatSegmentIdIsUpdatedInTheTactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete Authentic Brand Safety targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Authentic Brand Safety target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add \u003cMedia Supply Targeting\u003e Targeting and see that User is able to \u003ctype\u003e targeting to the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@T"
    }
  ]
});
formatter.step({
  "name": "I filter a \u003cstatus\u003e line item from landing page",
  "keyword": "And "
});
formatter.step({
  "name": "I filter \u003clineitem\u003e lineitem from Type filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I add new \u003cMedia Supply Targeting\u003e targeting on tactic",
  "keyword": "When "
});
formatter.step({
  "name": "I \u003ctype\u003e targets and save changes",
  "keyword": "And "
});
formatter.step({
  "name": "I assert that entries for \u003cMedia Supply Targeting\u003e exists",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete \u003cMedia Supply Targeting\u003e targeting from tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I see \u003cMedia Supply Targeting\u003e target does not exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "lineitem",
        "Media Supply Targeting",
        "type"
      ]
    },
    {
      "cells": [
        "Running",
        "Display",
        "Operating System",
        "Target Selected"
      ]
    },
    {
      "cells": [
        "Running",
        "Audio",
        "Operating System",
        "Block Selected"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Operating System Targeting and see that User is able to Target Selected targeting to the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@T"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter Display lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new Operating System targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Target Selected targets and save changes",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iTargetTypePlacementTargets(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I assert that entries for Operating System exists",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iAssertThatEntriesForTargetingRuleExists(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete Operating System targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Operating System target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Viewability Targeting and see that User is able to add targetings to the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tes"
    }
  ]
});
formatter.step({
  "name": "I filter a \u003cstatus\u003e line item from landing page",
  "keyword": "And "
});
formatter.step({
  "name": "I filter \u003clineitem\u003e lineitem from Type filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I add new \u003cMedia Supply Targetings Type\u003e targeting on tactic",
  "keyword": "When "
});
formatter.step({
  "name": "I verify viewability rating I should see \u003cMedia Supply Targetings Type\u003e added to tactic",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete \u003cMedia Supply Targeting\u003e targeting from tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I see \u003cMedia Supply Targeting\u003e target does not exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "lineitem",
        "Media Supply Targetings Type"
      ]
    },
    {
      "cells": [
        "Running",
        "Display",
        "Viewability"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Viewability Targeting and see that User is able to add targetings to the tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@Tes"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter Display lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new Viewability targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify viewability rating I should see Viewability added to tactic",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.verify_double_verifys_rating(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete \u003cMedia Supply Targeting\u003e targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //*[contains(text(),\u0027\u003cMedia Supply Targeting\u003e\u0027)]/following-sibling::div/div[@title\u003d\u0027delete\u0027]}\r\nExpected: visible\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658214113577.10.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658214113577.10.html\r\nTimeout: 25 s.\r\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027\u003cMedia Supply Targeting\u003e\u0027)]/following-sibling::div/div[@title\u003d\u0027delete\u0027]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:56)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:133)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:87)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:30)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.shouldBe(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.deleteTargetFromTactic(TacticPage.java:172)\r\n\tat stepdefs.TargetPageStepDefs.delete_given_targeting(TargetPageStepDefs.java:320)\r\n\tat ✽.I delete \u003cMedia Supply Targeting\u003e targeting from tactic(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/targetings/media_supply.feature:308)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027\u003cMedia Supply Targeting\u003e\u0027)]/following-sibling::div/div[@title\u003d\u0027delete\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPINHYDW0D88\u0027, ip: \u0027192.168.29.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\SATYA_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53866}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bbb1d81cee552e5e0ba816099a9f5153\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027\u003cMedia Supply Targeting\u003e\u0027)]/following-sibling::div/div[@title\u003d\u0027delete\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor24.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:65)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:40)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:101)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:30)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.shouldBe(Unknown Source)\r\n\tat com.ppt.pages.TacticPage.deleteTargetFromTactic(TacticPage.java:172)\r\n\tat stepdefs.TargetPageStepDefs.delete_given_targeting(TargetPageStepDefs.java:320)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see \u003cMedia Supply Targeting\u003e target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Audience Multiplier targeting For DOOH line item and verify If  user is able to add  targeting to the tactic",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@Tes"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter DOOH lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new Audience Multiplier targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I assert that audience multiplier target is added to the target",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iAssertThatAudienceMultiplierTargetIsAddedToTheTarget()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete  targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see Audience Multiplier target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "PMP -Add Deal for Private Market Place and verify tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@T"
    }
  ]
});
formatter.step({
  "name": "I filter a \u003cstatus\u003e line item from landing page",
  "keyword": "And "
});
formatter.step({
  "name": "I filter with Advertiser Amgen",
  "keyword": "And "
});
formatter.step({
  "name": "I filter \u003clineitem\u003e lineitem from Type filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I add new \u003cMedia Supply Targeting\u003e targeting on tactic",
  "keyword": "When "
});
formatter.step({
  "name": "I add a deal with exchange JW Player",
  "keyword": "And "
});
formatter.step({
  "name": "I assert that added \u003cMedia Supply Targeting\u003e target values exist",
  "keyword": "Then "
});
formatter.step({
  "name": "I delete \u003cMedia Supply Targeting\u003e targeting from tactic",
  "keyword": "And "
});
formatter.step({
  "name": "I see \u003cMedia Supply Targeting\u003e target does not exist",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status",
        "lineitem",
        "Media Supply Targeting"
      ]
    },
    {
      "cells": [
        "Running",
        "Video",
        "PMP"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I launched pulsepoint application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_launched_pulsepoint_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter login details",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_enter_login_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clicked on buyer portal link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginPageStepDefs.i_clicked_on_buyer_portal_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "PMP -Add Deal for Private Market Place and verify tactic",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Te"
    },
    {
      "name": "@T"
    }
  ]
});
formatter.step({
  "name": "I filter a Running line item from landing page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_a_running_line_item_from_landing_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I filter with Advertiser Amgen",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.iFilterWithAdvertiserAmgen(java.lang.String)"
});
formatter.result({
  "error_message": "Element not found {By.xpath: //span[text()\u003d\u0027Advertiser\u0027]}\r\nExpected: visible\r\nScreenshot: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658214244327.11.png\r\nPage source: file:/C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/build/reports/tests/1658214244327.11.html\r\nTimeout: 25 s.\r\nCaused by: NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Advertiser\u0027]\"}\r\n\tat com.codeborne.selenide.impl.WebElementSource.createElementNotFoundError(WebElementSource.java:56)\r\n\tat com.codeborne.selenide.impl.ElementFinder.createElementNotFoundError(ElementFinder.java:133)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:87)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:30)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.shouldBe(Unknown Source)\r\n\tat com.ppt.core.CommonComponentsPage.filterAdvertiser(CommonComponentsPage.java:141)\r\n\tat stepdefs.CampaignPageStepDefs.iFilterWithAdvertiserAmgen(CampaignPageStepDefs.java:200)\r\n\tat ✽.I filter with Advertiser Amgen(file:///C:/Users/Satya_Nuvvula/Pulsepoint/AutoLocal/portal-automation/src/test/java/feature_files/smoke/smoke_main/targetings/media_supply.feature:329)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Advertiser\u0027]\"}\n  (Session info: chrome\u003d103.0.5060.114)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EPINHYDW0D88\u0027, ip: \u0027192.168.29.145\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: true, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\SATYA_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53986}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 90c6849215c2c1d1e9be2ed2b69769f5\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Advertiser\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor24.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:65)\r\n\tat com.codeborne.selenide.impl.WebElementSelector.findElement(WebElementSelector.java:40)\r\n\tat com.codeborne.selenide.impl.ElementFinder.getWebElement(ElementFinder.java:101)\r\n\tat com.codeborne.selenide.impl.WebElementSource.checkCondition(WebElementSource.java:72)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:30)\r\n\tat com.codeborne.selenide.commands.Should.execute(Should.java:14)\r\n\tat com.codeborne.selenide.commands.Commands.execute(Commands.java:152)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.dispatchAndRetry(SelenideElementProxy.java:104)\r\n\tat com.codeborne.selenide.impl.SelenideElementProxy.invoke(SelenideElementProxy.java:70)\r\n\tat com.sun.proxy.$Proxy23.shouldBe(Unknown Source)\r\n\tat com.ppt.core.CommonComponentsPage.filterAdvertiser(CommonComponentsPage.java:141)\r\n\tat stepdefs.CampaignPageStepDefs.iFilterWithAdvertiserAmgen(CampaignPageStepDefs.java:200)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:134)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:597)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:173)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:816)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.base/java.util.ArrayList.forEach(ArrayList.java:1541)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:766)\r\n\tat org.testng.TestRunner.run(TestRunner.java:587)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:384)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:378)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:337)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:286)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1187)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1109)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1039)\r\n\tat org.testng.TestNG.run(TestNG.java:1007)\r\n\tat com.intellij.rt.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:66)\r\n\tat com.intellij.rt.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:109)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I filter Video lineitem from Type filter",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.i_filter_display_line_item(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select first lineitem",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.CampaignPageStepDefs.select_first_line_itme()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select Non broker Tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.i_select_non_broker_tactic()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add new PMP targeting on tactic",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.TacticPageStepDefs.add_new_targeting_to_tactic(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I add a deal with exchange JW Player",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.iAddADealWithExchangeJWPlayer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I assert that added PMP target values exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_assert_added_target_exists(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I delete PMP targeting from tactic",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.delete_given_targeting(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see PMP target does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.TargetPageStepDefs.i_see_deleted_target_does_not_exist(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png", "screenshot");
formatter.after({
  "status": "passed"
});
});