import { Given, Then, When } from "@cucumber/cucumber";
import Login from "../pageobjects/Login.page.js";
import Home from "../pageobjects/Home.page.js";

Given(/^I am on the login screen$/, async () => {
    await Login.openview();
});


When(/^I enter username "([^"]*)"$/, async (username) => {
    await Login.setUsername(username);
});

When(/^I tap the login button$/, async () => {
    await Login.submitLoginForm();
});

When(/^I enter password "([^"]*)"$/, async (password) => {
    await Login.setPassword(password);
});

Then(/^login is correct$/, async () => {
	await new Promise(resolve => setTimeout(resolve, 9000));
	await Login.loginsuccesfull();
});


// Given(/^I am on the main screen$/, async () => {
// 	await Login.loginsuccesfull();
// });

// When(/^I click on the "([^"]*)" element$/, async (args1) => {
//     await Home.foodsbutton();

// });

// When(/^I click on the "([^"]*)" element$/, async (args1) => {
// 	await Home.videosbutton();
// });

// When(/^I click on the "([^"]*)" element$/, async (args1) => {
// 	await Home.tutorialsbutton();
// });

// When(/^I click on the "([^"]*)" element$/, async (args1) => {
// 	await Home.profilebutton();
// });

// Then(/^I should see the corresponding sections$/, async () => {
// 	await Home.tutorialText();
// });


