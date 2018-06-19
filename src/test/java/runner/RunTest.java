package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//Uncomment @RunWith if you are using Junit to run Test 
@RunWith(Cucumber.class)

@CucumberOptions(features = { "src//test//java//features" }, glue = { "stepdefinitions", "utility" }, plugin = {
		"pretty", "html:target/cucumber", "json:target/cucumber/cucumber.json",
		"pretty:target/cucumber/cucumber-pretty.json", "usage:target/cucumber/cucumber-usage.json",
		"junit:target/cucumber/cucumber-result.xml" })

public class RunTest {

}