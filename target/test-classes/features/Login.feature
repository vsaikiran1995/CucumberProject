@Browser
Feature: This feature will be used to test the login functionality of Simplilearn application

  Background: 
    Given I have launched the application
    And I have clicked on Login Link

  @WIP
  Scenario: Validate the Login success scenario
    When I enter username
    And I enter password
    And I click on Login button
    Then I should land on home page

  @Sanity
  Scenario: Validate the Login faiiure scenario
    When I enter username
    And I enter password
    And I click on Login button
    Then I should get the error message

  @Sanity
  Scenario: Validate the Login faiiure scenario
    When I enter username as "Test@gmail.com"
    And I enter password as "Test@123"
    And I click on Login button
    Then I should get the error message as "The email or password you have entered is invalid."
@Sanity @Regression
  Scenario Outline: Validate the Login faiiure scenario
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I click on Login button
    Then I should get the error message as "<Error>"

    Examples: 
      | UserName          | Password | Error                                              |
      | Test@gmail.com    | Test@123 | The email or password you have entered is invalid. |
      | Test123@gmail.com | Test@234 | The email or password you have entered is invalid. |
