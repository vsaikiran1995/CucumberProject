package stepdefs;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome=true,
		plugin= {"pretty","html:target/html-cucumber","json:target/cucumber.json"},
		features="src/test/java/features",
		glue="stepdefs",
		//tags= {"@Sanity"}
		//tags= {"@Sanity or @Regression"} //either sanity or Regreesion
		//tags={"@Sanity and @Regression"}  //both tags should be there
		//tags= {"@Calculator"} //feature level tag
		//tags= {"not @WIP"} //@WIP will not executed and remaining all scenarios will get executed.
		tags= {"@Browser and not @WIP"}
		
		)
public class TestRunner {

}
