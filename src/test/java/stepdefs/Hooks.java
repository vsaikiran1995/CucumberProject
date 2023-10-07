package stepdefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import io.cucumber.java.After;
import io.cucumber.java.Before;


public class Hooks {
	
	public static WebDriver driver;
	
	@Before("@Browser")
	public void setup() {
		//WebDriverManager.chromedriver().setup();
		ChromeOptions co = new ChromeOptions();
		co.setBrowserVersion("115");
		driver = new ChromeDriver(co);
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
		driver.manage().window().maximize();
	}
	
	@After("@Browser")
	public void teardown() {
		driver.quit();
	}

}
