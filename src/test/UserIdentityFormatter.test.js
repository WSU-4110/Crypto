const setEmail = require('../components/UserIdentityFormatter/SetEmail');
const setPhoneNumber = require('../components/UserIdentityFormatter/SetPhoneNumber');
const setUsername = require('../components/UserIdentityFormatter/SetUsername');

/* Good Unit Testing Checklist
    - Automatic: Run completely by itself, without any human input. 
    - Repeatable: Determine by itself whether it is passed or failed, without a human interpreting the results
    - Single responsibility: One Unit testing test exactly one feature
    - Independent: Run in isolation, separate from any other test cases (even if they test the same functions)
    - Repeatable: Multiple invocations of the test should consistently return the same value. */

/* USER IDENTITY CONFIGURATION TESTS */

/* Check that Username is Formatted Properly */
test('Username is Formatted', () => {
  expect(setUsername("Ian")).toMatch(/Username: Ian/);
});

/* Check that Phone Number Formatted Properly */
test('Phone number is Formatted', () => {
  expect(setPhoneNumber("555-555-5555")).toMatch(/Phone Number: 555-555-5555/);
});

/* Check that Email Formatted Properly */
test('Email is Set', () => {
  expect(setEmail("ianTest@gmail.com")).toMatch(/Email: ianTest@gmail.com/);
});
