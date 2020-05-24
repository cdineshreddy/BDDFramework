package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {
	
	public WebDriver driver;
	
	public AddCustomerPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	By customerLinkMenu = By.xpath("//a[@href='#']//span[contains(text(), 'Customers')]");
	By customerLinkMenuItem = By.xpath("(//span[@class='menu-item-title'][contains(text(), 'Customers')])[1]");
	By addNewBtn = By.xpath("//a[@class='btn bg-blue']");
	By email = By.xpath("//input[@id='Email']");
	By password = By.xpath("//input[@id='Password']");
	By customerRoles = By.xpath("(//div[@class='k-multiselect-wrap k-floatwrap'])[2]");
	By listAdminstartor = By.xpath("//li[contains(text(), 'Administrators')]");
	By listRegistered = By.xpath("//li[contains(text(), 'Registered')]");
	By listGuest = By.xpath("//li[contains(text(), 'Guests')]");
	By listVendor = By.xpath("//li[contains(text(), 'Vendors')]");
	By ddVendorID = By.xpath("//select[@id='VendorId']");
	By genderMale = By.xpath("//input[@id='Gender_Male']");
	By genderFemale = By.xpath("//input[@id='Gender_Female']");
	By txtFirstName = By.xpath("//input[@id='FirstName']");
	By txtLastName = By.xpath("//input[@id='LastName']");
	By txtDOB = By.xpath("//input[@id='DateOfBirth']");
	By txtCompanyName = By.xpath("//input[@id='Company']");
	By txtAdminContent = By.xpath("//textarea[@id='AdminComment']");
	By saveBtn = By.xpath("//button[@name='save']");
	
	
	public void clickOnCustomerMenu() {
		driver.findElement(customerLinkMenu).click();
	}
	
	public void clickOnCustomerMenuItem() {
		driver.findElement(customerLinkMenuItem).click();
	}
	
	public void clickOnAddNew() {
		driver.findElement(addNewBtn).click();
	}
	
	public void setEmail(String emailId) {
		driver.findElement(email).sendKeys(emailId);
	}
	
	public void setPassword(String pwd) {
		driver.findElement(password).sendKeys(pwd);
	}
	
	public void setCustomerRoles(String role) throws Exception {
		
		if(!role.equals("Vendors")) {
			driver.findElement(By.xpath("//*[@id='SelectedCustomerRoleIds_taglist']/li/span[2]")).click();			
		}
		driver.findElement(customerRoles).click();
		WebElement listItem;
		Thread.sleep(3000);
		
		if(role.equals("Administrators")) {
			listItem = driver.findElement(listAdminstartor);
		}else if(role.equals("Guests")) {
			listItem = driver.findElement(listGuest);
		}else if(role.equals("Registered")) {
			listItem = driver.findElement(listRegistered);
		}else  {
			listItem = driver.findElement(listVendor);
		}
		
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", listItem);
	}
	
	public void setManagerOfVendor(String value) {
		
		Select dd = new Select(driver.findElement(ddVendorID));
		dd.selectByVisibleText(value);
	}
	
	public void setGender(String gender) {
		
		if(gender.equals("Male")) {
			driver.findElement(genderMale).click();
		}else if(gender.equals("Female")) {
			driver.findElement(genderFemale).click();
		}else {
			driver.findElement(genderMale).click();	
		}
	}
	
	public void setFirstName(String fname) {
		driver.findElement(txtFirstName).sendKeys(fname);
	}
	
	public void setLastName(String lname) {
		driver.findElement(txtLastName).sendKeys(lname);
	}
	
	public void setDOB(String dob) {
		driver.findElement(txtDOB).sendKeys(dob);
	}
	
	public void setCompanyName(String name) {
		driver.findElement(txtCompanyName).sendKeys(name);
	}
	
	public void setAdminContent(String content) {
		driver.findElement(txtAdminContent).sendKeys(content);
	}
	
	public void clickOnSave() {
		driver.findElement(saveBtn).click();
	}
}
