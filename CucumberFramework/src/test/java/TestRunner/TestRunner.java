package TestRunner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
			features = "./Features/Sales.feature",
			glue = "StepDefinitions",
			dryRun = false,
			monochrome = true,
			plugin = {"pretty","html:test-output"}
			//tags = {"@Sanity, @Regression"}
		)
public class TestRunner {	

}
