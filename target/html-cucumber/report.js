$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionality of Simplilearn application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login faiiure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login faiiure scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"Test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Test@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the Login faiiure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "Test@gmail.com",
        "Test@123",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "Test123@gmail.com",
        "Test@234",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login faiiure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"Test@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Test@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_clicked_on_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Login faiiure scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"Test123@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Test@234\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});