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
  "name": "Search Customer by EmailID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "Enter Customer Email",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.enter_Customer_Email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should found Email in the Search table",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_should_found_Email_in_the_Search_table()"
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
  "name": "Search Customer by Name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "Enter Customer FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.enter_Customer_FirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Customer LastName",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.enter_Customer_LastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Search button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.click_on_Search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should found Name in the Search table",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_should_found_Name_in_the_Search_table()"
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
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User launch the Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User opens URL \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters the email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Log out",
  "keyword": "When "
});
formatter.step({
  "name": "Page title shoulde be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "User enters the email as \"admin@yourstore.com\" and password as \"admin123\"",
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat StepDefinitions.TestSteps.page_Title_should_be(TestSteps.java:85)\r\n\tat ✽.Page Title should be \"Dashboard / nopCommerce administration\"(file:///D:/GitHub/BDD/CucumberFramework/./Features/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on Log out",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.user_click_on_Log_out()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title shoulde be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.page_title_shoulde_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.close_the_Browser()"
});
formatter.result({
  "status": "skipped"
});
});