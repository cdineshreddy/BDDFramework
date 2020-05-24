package StepDefinitions;

import java.util.Properties;
import org.apache.commons.lang.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import PageObjects.AddCustomerPage;
import PageObjects.LoginPage;
import PageObjects.SearchCustomerPage;

public class BaseClass {
	
	public  WebDriver driver;
	public  LoginPage lp;
	public  AddCustomerPage addCust;
	public  SearchCustomerPage sc;
	public static Logger logger;
	public Properties prop;

	//This method is used to generate Random String for Email
	public static String randomString() {
		String str = RandomStringUtils.randomAlphabetic(5);
		return str;
	}
	
	public String getPageTitle() {
		return driver.getTitle();
	}
	
	
	
}
