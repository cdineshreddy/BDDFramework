package StepDefinitions;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import PageObjects.AddCustomerPage;
import PageObjects.LoginPage;
import PageObjects.SalesPage;
import PageObjects.SearchCustomerPage;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;


public class TestSteps extends BaseClass{
	
	@Before
	public void setUp() throws Exception {
		
		//Adding the logger
		logger = Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("log4j.properties");
		
		//Reading the properties file
		prop=new Properties();
		FileInputStream fis=new FileInputStream("config.properties");
		prop.load(fis);
		
		String br = prop.getProperty("browser");
		if (br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", prop.getProperty("chromepath"));
			driver = new ChromeDriver();
		} else if (br.equals("firefox")) {
			System.setProperty("webdriver.gecko.driver", prop.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
		} else if (br.equals("edge")) {
			System.setProperty("webdriver.edge.driver", prop.getProperty("edgepath"));
			driver = new EdgeDriver();
		}

	}
	
	@Given("User launch the Chrome Browser")
	public void user_launch_the_Chrome_Browser() {
		
		lp=new LoginPage(driver);
	    logger.info("Browser has opened..................");
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String url) {
		driver.get(url);
		logger.info("Launched the URL..................");
		driver.manage().window().maximize();
		logger.info("Browser has maximeszed............");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	}

	@When("User enters the email as {string} and password as {string}")
	public void user_enters_the_email_as_and_password_as(String email, String password) {
	    lp.setUsername(email);
	    logger.info("Configured the Uername");
	    lp.setPassword(password);
	    logger.info("Configured the Password");
	}

	@When("Click on Login button")
	public void click_on_Login_button() {
	    lp.clickLogin();
	    logger.info("Clicked on the Login button");
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String pageTitle) {

		if (driver.getPageSource().contains("Login was unsuccessful.")) {
			logger.warn("Unable to login to the application");
			driver.close();
			Assert.assertTrue(false);
		} else {
			Assert.assertEquals(pageTitle, driver.getTitle());
			logger.info("Successfully login to the application");
		}

	}

	@When("User click on Log out")
	public void user_click_on_Log_out() throws Exception{
	   
		lp.clickLogout();
		logger.info("Click on the Logout button");
		Thread.sleep(5000);
	}

	@Then("Page title shoulde be {string}")
	public void page_title_shoulde_be(String pageTitle) {
	    
		if (driver.getPageSource().contains("Dashboard / nopCommerce administration")) {
			logger.warn("Unable to logout the application");
			driver.close();
			Assert.assertTrue(false);
		} else {
			Assert.assertEquals(pageTitle, driver.getTitle());
			logger.info("Successfully logout from the application");
		}
	}

	@Then("Close the Browser")
	public void close_the_Browser() {
		driver.close();
		logger.info("Successfully closed the browser");
	}
	
	//Customer Feature Step Definitions
	
	@Then("User can view the Dashboard")
	public void user_can_view_the_Dashboard() {
	   addCust = new AddCustomerPage(driver);
	   Assert.assertEquals("Dashboard / nopCommerce administration", getPageTitle());
	   logger.info("Üser navigated to the Dashboard page");
	}

	@When("User click on the Customer menu")
	public void user_click_on_the_Customer_menu() throws Exception {
		Thread.sleep(3000);
		addCust.clickOnCustomerMenu();
		logger.info("Clicked on the Customer Menu");
	}

	@When("Click on Customers Menu item")
	public void click_on_Customers_Menu_item() throws Exception {
	    Thread.sleep(2000);
		addCust.clickOnCustomerMenuItem();
		logger.info("Clicked on the Customer Menu Item");
	}

	@When("Click on Add new button")
	public void click_on_Add_new_button() throws Exception{
		addCust.clickOnAddNew();
		logger.info("Clicked on the Add new customer");
		Thread.sleep(3000);	   
	}

	@Then("User can view Add new Customer page")
	public void user_can_view_Add_new_Customer_page() {
		Assert.assertEquals("Add a new customer / nopCommerce administration", getPageTitle());	
		logger.info("User navigated to the Add new Customer page");
	}

	@When("User  enter Customer info")
	public void user_enter_Customer_info() throws Exception{
		logger.info("User is configuring the required details");
	    String email = randomString()+"@gamil.com";
	    addCust.setEmail(email);
	    addCust.setPassword("Test123");
	    addCust.setCustomerRoles("Guests");
	    Thread.sleep(3000);
		addCust.setManagerOfVendor("Vendor 2");
		addCust.setGender("Male");
		addCust.setFirstName("Dinesh");
		addCust.setLastName("Reddy");
		addCust.setDOB("7/9/1985");
		addCust.setCompanyName("Test");
		addCust.setAdminContent("This is for testing...........");
		logger.info("User configured all the required details");
	}

	@When("Click on save button")
	public void click_on_save_button() throws Exception {
	    addCust.clickOnSave();
	    logger.info("Clicked on the Save button");
	    Thread.sleep(3000);
	}

	@Then("User can view Confirmation Message {string}")
	public void user_can_view_Confirmation_Message(String msg) {
		 Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains(msg));
	    
	}
	
	//Steps to Search an Customer using Email ID
	
	@When("Enter Customer Email")
	public void enter_Customer_Email() {
		sc = new SearchCustomerPage(driver);
		sc.setEmail("victoria_victoria@nopCommerce.com");
		logger.info("User entered the email id");
	    
	}

	@When("Click on Search button")
	public void click_on_Search_button() throws Exception{
		sc.clickSearch();
		logger.info("Cliked on the serach button");
		Thread.sleep(3000);
	    
	}

	@Then("User should found Email in the Search table")
	public void user_should_found_Email_in_the_Search_table() {
		boolean status=sc.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
	    Assert.assertEquals(true, status);
	    logger.info("User able to the find the customer record");
	}
	
	
	//Steps for Search a Customer by using First and Last name
	
	@When("Enter Customer FirstName")
	public void enter_Customer_FirstName() {
		sc = new SearchCustomerPage(driver);
		sc.setFirstName("Victoria");
		logger.info("User entered the First Name");
	}

	@When("Enter Customer LastName")
	public void enter_Customer_LastName() {
		sc.setLastName("Terces");
		logger.info("User entered the Last Name");
	    
	}

	@Then("User should found Name in the Search table")
	public void user_should_found_Name_in_the_Search_table() {
	   boolean status=sc.searchCustomerByName("Victoria", "Terces");
	   Assert.assertEquals(true, status);
	   logger.info("User able to the find the customer record");
		
	}
	
	//Steps for Search a Customer by using Email address
	
		
	@Then("Click on the Sales Menu item")
	public void click_on_the_Sales_Menu_item() {
	  sp=new SalesPage(driver);
	  sp.clickSales();
	  logger.info("Clicked on the Sales Menu item");
		
	}
	
	@When("Click on the Orders link")
	public void click_on_the_Orders_link() {
	   sp.clickOrders();
	   logger.info("Clicked on the Orders Link");
	}
	
	@When("Enter Email address {string}")
	public void enter_Email_address(String mail) {
	  sp.enterEmail(mail);
	  logger.info("Configuring the email id");
	}
	
	@When("Click on the Search button")
	public void click_on_the_Search_button() {
	  sp.clickSearch();
	  logger.info("Clicked on the Serach button");
	}
	
	@Then("Verify the Customer Order details")
	public void verify_the_Customer_Order_details() throws Exception {
	  sp.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
	  logger.info("Validated the Customer details");
	}
	
}
