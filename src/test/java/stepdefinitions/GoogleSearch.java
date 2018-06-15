package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import utility.Hook;

public class GoogleSearch {

	private WebDriver driver;

	public GoogleSearch() {
		this.driver = Hook.getDriver();
	}

	@Given("^I open a browser$")
	public void i_open_a_browser() throws Throwable {
		Thread.sleep(3000);
		System.out.println("Current url : " + driver.getCurrentUrl());
	}

	@Given("^I navigate to google page$")
	public void i_navigate_to_google_page() throws Throwable {
		driver.get("http://www.google.com");
	}

	@Then("^I validate the search tesxt field$")
	public void i_validate_the_search_tesxt_field() throws Throwable {
		// Assert.assertTrue(driver.findElement(By.name("q")).isDisplayed());
		driver.findElement(By.name("q")).sendKeys("Cucumber");
		Thread.sleep(1000);
	}

}
