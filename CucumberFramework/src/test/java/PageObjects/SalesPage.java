package PageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import Utilities.WaitHelper;


public class SalesPage {
	
	WebDriver driver;
	WaitHelper waitHelper;
	
	public SalesPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		waitHelper = new WaitHelper(driver);
	}
	
	@FindBy(xpath="//span[contains(text(),'Sales')]")
	WebElement salesLink;
	
	@FindBy(xpath="//span[contains(text(),'Orders')]")
	WebElement ordersLink;
	
	@FindBy(xpath="//input[@id='BillingEmail']")
	WebElement emailAddress;
	
	@FindBy(xpath="//button[@id='search-orders']")
	WebElement searchButton;
	
	@FindBy(xpath="//table[@id='orders-grid']/tbody/tr")
	List<WebElement> tableRows;
	
	@FindBy(xpath="//table[@id='orders-grid']/tbody/tr/td")
	List<WebElement> tableColumns;
	
	@FindBy(xpath="//table[@id='orders-grid']")
	WebElement table;
	
	public void clickSales() {
		waitHelper.waitForElement(salesLink, 30);
		salesLink.click();
	}
	
	public void clickOrders() {
		ordersLink.click();
	}
	
	public void enterEmail(String mail) {
		waitHelper.waitForElement(emailAddress, 30);
		emailAddress.sendKeys(mail);
	}
	
	public void clickSearch() {
		searchButton.click();
	}
	
	public int getNoOfRows() {
		return(tableRows.size());
	}
	
	public int getNoOfColumns() {
		return(tableColumns.size());
	}
	
	public boolean searchCustomerByEmail(String mail) throws Exception {
		Thread.sleep(5000);
		boolean flag=false;
		for(int i=1;i<=getNoOfRows();i++) {
			String mailId = table.findElement(By.xpath("//table[@id='orders-grid']/tbody/tr["+i+"]/td[6]")).getText();
			if(mailId.equals(mail)) {
				flag=true;
			}else {
				System.out.println("Unable to find the customer");
				flag=false;
			}
		}
		return flag;
	}

}
