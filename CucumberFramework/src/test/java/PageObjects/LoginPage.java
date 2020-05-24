package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(name="Email")
	@CacheLookup
	public WebElement txtEmail;
	
	@FindBy(name="Password")
	@CacheLookup
	public WebElement txtPassword;
	
	@FindBy(xpath="//input[@value='Log in']")
	@CacheLookup
	public WebElement loginButton;
	
	@FindBy(linkText = "Logout")
	@CacheLookup
	public WebElement linkLogout;
	
	public void setUsername(String uname) {
		txtEmail.clear();
		txtEmail.sendKeys(uname);
	}
	
	public void setPassword(String password) {
		txtPassword.clear();
		txtPassword.sendKeys(password);
	}
	
	public void clickLogin() {
		loginButton.click();
	}

	public void clickLogout() {
		linkLogout.click();
	}
}
