Feature: Customers

Background: Below are the commons steps for each scenario
			Given User launch the Chrome Browser
			When User opens URL "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
			And User enters the email as "admin@yourstore.com" and password as "admin"
			And Click on Login button
			Then User can view the Dashboard

@Sanity
Scenario:  Add a new Customer
			
			When User click on the Customer menu
			And Click on Customers Menu item
			And Click on Add new button
			Then User can view Add new Customer page
			When User  enter Customer info
			And Click on save button
			Then User can view Confirmation Message "The new customer has been added successfully"
			When User click on Log out
			Then Page title shoulde be "Your store. Login"
			And Close the Browser
		
@Regression	
Scenario: Search Customer by EmailID
		
			When User click on the Customer menu
			And Click on Customers Menu item
			And Enter Customer Email
			When Click on Search button
			Then User should found Email in the Search table
			When User click on Log out
			Then Page title shoulde be "Your store. Login"
			And Close the Browser

@Regression
Scenario: Search Customer by Name
		
			When User click on the Customer menu
			And Click on Customers Menu item
			And Enter Customer FirstName
			And Enter Customer LastName
			When Click on Search button
			Then User should found Name in the Search table
			When User click on Log out
			Then Page title shoulde be "Your store. Login"
			And Close the Browser