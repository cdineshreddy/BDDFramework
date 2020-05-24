package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Utilities.WaitHelper;

public class SearchCustomerPage {
	
	public WebDriver driver;
	WaitHelper waitHelper;
	
	public SearchCustomerPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}
	
	@FindBy(xpath="//input[@id='SearchEmail']")
	WebElement txtEmail;
	
	@FindBy(xpath="//input[@id='SearchFirstName']")
	WebElement txtFirstName;
	
	@FindBy(xpath="//input[@id='SearchLastName']")
	WebElement txtLastName;
	
	@FindBy(xpath="//select[@id='SearchMonthOfBirth']")
	WebElement ddMonth;
	
	@FindBy(xpath="//select[@id='SearchDayOfBirth']")
	WebElement ddDay;
	
	@FindBy(xpath="//input[@id='SearchCompany']")
	WebElement txtCompany;
	
	@FindBy(xpath="//div[@class='k-multiselect-wrap k-floatwrap']")
	WebElement txtCustomerRoles;
	
	@FindBy(xpath="//li[contains(text(),'Administrators')]")
	WebElement listAdmin;
	
	@FindBy(xpath="//li[contains(text(),'Registered')]")
	WebElement listRegister;
	
	@FindBy(xpath="//li[contains(text(),'Guests')]")
	WebElement listGuests;
	
	@FindBy(xpath="//li[contains(text(),'Vendors')]")
	WebElement listVendors;
	
	@FindBy(xpath="//button[@id='search-customers']")
	WebElement btnSearch;
	
	@FindBy(xpath="//table[@role='grid']")
	WebElement searchResults;
	
	@FindBy(xpath="//table[@id='customers-grid']")
	WebElement table;
	
	@FindBy(xpath="//table[@id='customers-grid']//tbody/tr")
	List<WebElement> tableRows;
	
	@FindBy(xpath="//table[@id='customers-grid']//tbody/tr/td")
	List<WebElement> tableColumns;
	
	public void setEmail(String email) {
		waitHelper.waitForElement(txtEmail, 30);
		txtEmail.clear();
		txtEmail.sendKeys(email);
	}
	
	public void setFirstName(String fname) {
		waitHelper.waitForElement(txtFirstName, 30);
		txtFirstName.clear();
		txtFirstName.sendKeys(fname);
	}
	
	public void setLastName(String lname) {
		waitHelper.waitForElement(txtLastName, 30);
		txtLastName.clear();
		txtLastName.sendKeys(lname);
	}
	
	public void clickSearch() {
		btnSearch.click();
		waitHelper.waitForElement(btnSearch, 30);
	}
	
	public int getNoOfRows() {
		return(tableRows.size());
	}
	
	public int getNoOfColumns() {
		return(tableColumns.size());
	}
	
	public boolean searchCustomerByEmail(String email) {
		boolean flag = false;
		for (int i = 1; i <= getNoOfRows(); i++) {
			String emailID = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[2]")).getText();
			System.out.println(emailID);
			if (emailID.equals(email)) {
				flag = true;
			} else {
				System.out.println("Unable to find the Customer record");
				flag = false;
			}

		}
		return flag;
	}
	
	public boolean searchCustomerByName(String fname, String lname) {
		boolean flag = false;
		for(int i=1;i<=getNoOfRows();i++) {
			String name = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[3]")).getText();
			String names[]=name.split(" ");
			if(names[0].equals(fname) && names[1].equals(lname)) {
				flag=true;
			}else {
				System.out.println("Unable to find the Customer Record");
				flag=false;
			}
		}
		return flag;
	}
}
