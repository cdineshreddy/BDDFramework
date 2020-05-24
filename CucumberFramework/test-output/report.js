$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Customer.feature");
formatter.feature({
  "name": "Customers",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Below are the commons steps for each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_enters_the_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_can_view_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new Customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User click on the Customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_click_on_the_Customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Customers Menu item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_Customers_Menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Add new button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new Customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_can_view_Add_new_Customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  enter Customer info",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_enter_Customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Confirmation Message \"The new customer has been added successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_can_view_Confirmation_Message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch the Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_launch_the_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_enters_the_email_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.page_Title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log out",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_click_on_Log_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title shoulde be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.page_title_shoulde_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});