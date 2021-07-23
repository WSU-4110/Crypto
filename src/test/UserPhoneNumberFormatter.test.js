const formatPhoneNumber = require('../components/UserPhoneNumberFormatter/FormatPhoneNumber');
const verifyPhoneNumberLength = require('../components/UserPhoneNumberFormatter/VerifyPhoneNumberLength');

/* Good Unit Testing Checklist
    - Automatic: Run completely by itself, without any human input. 
    - Repeatable: Determine by itself whether it is passed or failed, without a human interpreting the results
    - Single responsibility: One Unit testing test exactly one feature
    - Independent: Run in isolation, separate from any other test cases (even if they test the same functions)
    - Repeatable: Multiple invocations of the test should consistently return the same value. */

/* USER PHONE NUMBER CONFIGURATION TESTS */

/* Check that Area Code is Added to Phone Number and Formatted */
test('Area Code is Added', () => {
  expect(formatPhoneNumber("555", "555-5555")).toMatch(/555-555-5555/);
});

/* Check Phone Number is Valid Length */
test('Phone Number Length is Valid', () => {
  expect(verifyPhoneNumberLength("555-555-5555")).toBeTruthy();
});

/* Check Phone Number is Invalid Length */
test('Phone Number Length is Invalid', () => {
  expect(verifyPhoneNumberLength("55-555-5555")).toBeFalsy();
});
