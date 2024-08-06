import {Given, When, Then} from '@wdio/cucumber-framework'
import TabBar from '../screenobjects/components/TabBar.js';
import LoginScreen from '../screenobjects/LoginScreen.js';
import NativeAlert from '../screenobjects/components/NativeAlert.js';
import LoginPage from '../pageobjects/Login.page.js';

Given(/^I am on the login tab$/, async () => {
    await LoginPage.openview();
});

When(/^I enter valid login credentials$/, async () => {
    await LoginScreen.tapOnLoginContainerButton();
    await LoginScreen.submitLoginForm({username: 'chalm+2@temperies.com'});
    await TabBar.openHome();
    await TabBar.openLogin();
    await LoginScreen.passwContainerButton();
    await LoginScreen.enterPassword({password: 'fatloss123 '});
    await TabBar.openHome();
    await TabBar.openLogin();
    await LoginScreen.waitForIsShown(true);
});

// Then(/^I should see a Success alert$/, async (alertType) => {
//     await NativeAlert.waitForIsShown();
//     await expect(await NativeAlert.text()).toContain(alertType);
// });

// Then('the alert should be closed when I click on OK', async () => {
//     await NativeAlert.topOnButtonWithText('OK');
//     await NativeAlert.waitForIsShown(false);
// });
