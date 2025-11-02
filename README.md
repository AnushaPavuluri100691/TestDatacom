# Datacom QA Automation Project Report

## Overview
This project automates testing for the **QA Practice Web Form** using **Playwright**, **Cucumber (BDD)**, and **TypeScript**.  
It validates field inputs, form submission behavior, and error message handling to ensure consistency and quality across UI components.


## Test Execution Summary
| Metric          | Count  |
| Total Scenarios | **14** |
| Passed          | **1**  |
| Failed          | **13** |


## Execution Commands
npx cucumber-js [For the end-to-end]
npx cucumber-js --tags "@<TagName>" for tag specific executions

## Covered Functional Bugs Using Automation
1) Submit form with valid data (Happy Path)
The form successfully submitted all valid input data as expected.
"Status": Working as designed.

2) Missing mandatory fields (with placeholders)
When some mandatory fields marked with * were left blank, the form still allowed submission.
Only the phone number and password fields enforced validation correctly.
Expected behavior: The form should block submission if any required field is empty.

3) Submit button behavior
The “Submit” button remains active even when the Terms & Conditions checkbox is unchecked.
Expected behavior: The button should remain disabled until the user accepts the checkbox.

4) Last Name field issue
One character from the Last Name field is missing in the result display.
A comparison script was added to validate and log mismatches between expected and actual values.
Expected behavior: The full last name should be displayed exactly as entered.

5) Phone Number field issue
The field appends an extra digit when numeric input is given.
When alphabetic characters are entered, it displays “NaN” at the end.
Expected behavior: Only valid numeric input should be allowed, and alphabetic input should be rejected.

6) Results page validation
Automated comparison between input and output revealed mismatches in the displayed data for some fields.
Expected behavior: The displayed results should match the input values exactly.

## UI Bugs Observed
UI Issues Identified

During automation testing of the QA Practice Web Form, the following UI and validation issues were observed:

UI-01 | No asterisk (*) indicator for First Name field despite being mandatory
→ Recommendation: Add * next to the label to indicate a required field.

UI-02 | Typo in Phone number label — currently spelled as “nunber”
→ Recommendation: Correct the label to “Phone number.”

UI-03 | Password length validation message displays [6,20] characters, which is unclear
→ Recommendation: Update message to “6–20 characters” for clarity.

UI-04 | Missing Terms and Conditions checkbox or statement before registration
→ Recommendation: Add a checkbox and enforce validation before submission.

UI-05 | Phone number field allows alphanumeric and special characters (e.g., abc@123)
→ Recommendation: Restrict input to numeric values only using input validation.


