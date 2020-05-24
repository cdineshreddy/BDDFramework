Feature: Login

@Sanity
Scenario: Successful Login with Credentials

	Given User launch the Chrome Browser
	When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
	And User enters the email as "admin@yourstore.com" and password as "admin"
	And Click on Login button
	Then Page Title should be "Dashboard / nopCommerce administration"
	When User click on Log out
	Then Page title shoulde be "Your store. Login"
	And Close the Browser
	
@Regression
Scenario Outline:  Login Data Driven

	Given User launch the Chrome Browser
	When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
	And User enters the email as "<email>" and password as "<password>"
	And Click on Login button
	Then Page Title should be "Dashboard / nopCommerce administration"
	When User click on Log out
	Then Page title shoulde be "Your store. Login"
	And Close the Browser
	
	Examples:
		| email | password |
		| admin@yourstore.com | admin |
		| admin@yourstore.com | admin123 |