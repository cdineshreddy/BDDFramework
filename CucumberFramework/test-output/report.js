$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Sales.feature");
formatter.feature({
  "name": "Sales",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search the Customer Order",
  "description": "",
  "keyword": "Scenario"
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
formatter.step({
  "name": "Click on the Sales Menu item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_the_Sales_Menu_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Orders link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_the_Orders_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Email address \"victoria_victoria@nopCommerce.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.enter_Email_address(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the Search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_the_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the Customer Order details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.verify_the_Customer_Order_details()"
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