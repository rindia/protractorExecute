Feature: create Account Feature
  Scenario: Verify Create Account
    When I Open Url and click on Account Link
    Then I Click on Member Button
    And I Enter "FirstName" as First Name
    And I Enter "LastName" as Last Name
    And I Enter "Email" as Email
    And I Choose "Internation" as International Option