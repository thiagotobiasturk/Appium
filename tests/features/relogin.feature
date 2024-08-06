Feature: Login to Mobile Application

  As a user of the mobile application
  I want to be able to log in with valid credentials
  And see an error message with invalid credentials
   

  Scenario: User attempts to log in
    Given I am on the login screen
    When I enter username "<username>"
    And I tap the login button
    And I enter password "<password>"
    And I tap the login button
    Then login is correct
    # When I click on the "Foods" element
    # And I click on the "Videos" element
    # And I click on the "Tutorial" element
    # And I click on the "Profile" element
    # Then I should see the corresponding sections

    Examples:
      | username                | password   |  
      | chalm+2@temperies.com   | fatloss123 |  
  

    
        