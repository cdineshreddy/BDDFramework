Feature: Sales

Scenario: Search the Customer Order
			Given User launch the Chrome Browser
			When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
			And User enters the email as "admin@yourstore.com" and password as "admin"
			And Click on Login button
			Then User can view the Dashboard
			And Click on the Sales Menu item
			When Click on the Orders link
			When Enter Email address "victoria_victoria@nopCommerce.com"
			And Click on the Search button
			Then Verify the Customer Order details
			When User click on Log out
			Then Page title shoulde be "Your store. Login"
			And Close the Browser
