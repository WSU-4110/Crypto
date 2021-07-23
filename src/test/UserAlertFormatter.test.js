const setBitcoin = require('../components/UserAlertFormatter/SetBitcoin');
const setEtherium = require('../components/UserAlertFormatter/SetEtherium');
const setDogecoin = require('../components/UserAlertFormatter/SetDogecoin');

/* Good Unit Testing Checklist
    - Automatic: Run completely by itself, without any human input. 
    - Repeatable: Determine by itself whether it is passed or failed, without a human interpreting the results
    - Single responsibility: One Unit testing test exactly one feature
    - Independent: Run in isolation, separate from any other test cases (even if they test the same functions)
    - Repeatable: Multiple invocations of the test should consistently return the same value. */

/* CRYPTOCURRENCY CONVERSION CONFIGURATION TESTS */

/* Check that Bitcoin is Converted Properly: Uppercase */
test('Bitcoin Formatted', () => {
    expect(setBitcoin("Bitcoin")).toMatch(/BTC/);
});

/* Check that Bitcoin is Converted Properly: Lowercase */
test('bitcoin Formatted', () => {
    expect(setBitcoin("bitcoin")).toMatch(/BTC/);
});

/* Check that Etherium is Converted Properly: Uppercase */
test('Etherium Formatted', () => {
    expect(setEtherium("Etherium")).toMatch(/ETH/);
});

/* Check that Etherium is Converted Properly: Lowercase */
test('etherium Formatted', () => {
    expect(setEtherium("etherium")).toMatch(/ETH/);
});

/* Check that Dogecoin is Converted Properly: Uppercase */
test('Dogecoin Formatted', () => {
    expect(setDogecoin("Dogecoin")).toMatch(/DOGE/);
});

/* Check that Dogecoin is Converted Properly: Lowercase */
test('dogecoin Formatted', () => {
    expect(setDogecoin("dogecoin")).toMatch(/DOGE/);
});

/* Check Invalid Cryptocurrency Formatting: Bitcoin */
test('Invalid Cryptocurrency Formatted: Bitcoin', () => {
    expect(setBitcoin("sss")).toMatch(/INVALID/);
});

/* Check Invalid Cryptocurrency Formatting: Etherium */
test('Invalid Cryptocurrency Formatted: Etherium', () => {
    expect(setEtherium("sss")).toMatch(/INVALID/);
});

/* Check Invalid Cryptocurrency Formatting: Dogecoin */
test('Invalid Cryptocurrency Formatted: Dogecoin', () => {
    expect(setDogecoin("sss")).toMatch(/INVALID/);
});
