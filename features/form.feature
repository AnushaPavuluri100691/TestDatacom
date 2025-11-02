Feature: Web form submission

  @formValidation
  Scenario Outline: Submit form with valid data
  // A happy path test case for form submission
    Given I navigate to the web form page
    When I fill the form with firstName "<firstName>", lastName "<lastName>", phoneNumber "<phoneNumber>", country "<country>", email "<email>", password "<password>" 
    And I submit the form
    Then I should see the result "<result>" message 
    Examples:
      | firstName | lastName | phoneNumber | country             | email           | password | result                             |
      | Test      | Tester   | 1234567890  | Angola              | test@tester.com | Pass1234 | Successfully registered            |
      | Test      | Tester   | 0987654321  | Australia           | a@b             | Sample1  | Enter valid email with domain name |
      |           | Tester   |             | India               | tester@xyz.com  | Pass1234 | Enter Phone number                 |
      | Test      | Tester   | #%^^gfjgdkd | Iran                | xyz@test.com    | Pass1234 | Phone number must be digits        |
      |           | User     | 0987654321  | Belgium             |                 | Sample1  | Enter your email ID                |
      |           | Doe      | 5555555555  | Iran                | teat@xyz.com    |          | Enter your password                |
      |           |          | 5555555555  | New Zealand         | xyz@xyz.com     | Pass1234 | Enter last Name                    |
      |           |          |             | Select a country... |                 |          | All fields are empty               |
      | Hello     | 12345    | 1234567890  | Australia           | tester@tes.com  | Pass1234 | Last name shouldn't be a number    |
      | 12345     | Hello    | 1234567890  | Australia           | tester@tes.com  | Pass1234 | First name shouldn't be a number   |
     

  @checkBoxDisabled
  Scenario: Verify that the submit button is disabled when checkbox is unchecked
    Given I navigate to the web form page
    When I fill the form with firstName "<firstName>", lastName "<lastName>", phoneNumber "<phoneNumber>", country "<country>", email "<email>", password "<password>" 
    And I should verify checkbox is disabled
    And I submit the form
    Then I should see the result "<result>" message 
    Examples:
      | firstName | lastName | phoneNumber | country             | email           | password | result                             |
      | Test      | Tester   | 1234567890  | Angola              | test@tester.com | Pass1234 | Successfully registered            |


  @lastNameValidation
  Scenario: Validate last name field on form submission
    Given I navigate to the web form page
    When I fill the form with firstName "<firstName>", lastName "<lastName>", phoneNumber "<phoneNumber>", country "<country>", email "<email>", password "<password>" 
    And I submit the form
    Then validate the lastName '<lastName>' is displayed correctly

    Examples:
      | firstName | lastName | phoneNumber | country   | email           | password | result                      |
      | John      | Harry    | 1234567890  | Australia | xyz@tester.com  | Pass1234 | Successfully registered     |
  
  @phoneNumberValidation
  Scenario: Validate phone number field on form submission
    Given I navigate to the web form page
    When I fill the form with firstName "<firstName>", lastName "<lastName>", phoneNumber "<phoneNumber>", country "<country>", email "<email>", password "<password>" 
    And I submit the form
    Then validate the phoneNumber '<phoneNumber>' is displayed correctly

    Examples:
      | firstName | lastName | phoneNumber | country   | email           | password | result                      |
      | John      | Harry    | 1234567890  | Australia | xyz@tester.com  | Pass1234 | Successfully registered     |
  
  @resultsValidation
  Scenario: Validate result message on form submission
    Given I navigate to the web form page
    When I fill the form with firstName "<firstName>", lastName "<lastName>", phoneNumber "<phoneNumber>", country "<country>", email "<email>", password "<password>" 
    And I submit the form
    Then validate the result area shows the given values '<firstName>', '<country>', '<email>', '<password>' correctly


    Examples:
      | firstName | lastName | phoneNumber | country     | email             | password   | result                  |
      | Anusha    | Tester   | 1234567890  | New Zealand | anusha@tester.com | Tester1234 | Successfully registered |