package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {

	WebDriver driver = Hooks.driver;

	@Given("I have launched the application")
	public void i_have_launched_the_application() {
		driver.get("https://www.simplilearn.com/");
	}

	@Given("I have clicked on Login Link")
	public void i_have_clicked_on_Login_Link() {
		WebElement loginlink = driver.findElement(By.linkText("Log in"));
		loginlink.click();
	}

	@When("I enter username")
	public void i_enter_username() {
		WebElement username = driver.findElement(By.name("user_login"));
		username.sendKeys("vsaikiran1995@gmail.com");
	}

	@When("I enter password")
	public void i_enter_password() {
		driver.findElement(By.name("user_pwd")).sendKeys("Test@123");
	}

	@When("I click on Login button")
	public void i_click_on_Login_button() {
		driver.findElement(By.className("rememberMe")).click();
		driver.findElement(By.name("btn_login")).click();
	}

	@Then("I should land on home page")
	public void i_should_land_on_home_page() {

	}

	@Then("I should get the error message")
	public void i_should_get_the_error_message() {
		WebElement error = driver.findElement(By.className("error_msg"));
		String ActError = error.getText();
		String ExpError = "The email or password you have entered is invalid.";
		Assert.assertEquals(ActError, ExpError);
	}
	
	@When("I enter username as {string}")
	public void i_enter_username_as(String userNameVal) {
		WebElement username = driver.findElement(By.name("user_login"));
		username.sendKeys(userNameVal);
	    
	}

	@When("I enter password as {string}")
	public void i_enter_password_as(String pwdVal) {
		driver.findElement(By.name("user_pwd")).sendKeys(pwdVal);
	    
	}

	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String ExpError) {
		WebElement error = driver.findElement(By.className("error_msg"));
		String ActError = error.getText();
		Assert.assertEquals(ActError, ExpError);
	    
	}

}
