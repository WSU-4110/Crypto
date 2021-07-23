const verifyCryptocurrencyType = require('../components/UserAlertFormatter/VerifyValidCryptoCurrency');

/* Good Unit Testing Checklist
    - Automatic: Run completely by itself, without any human input. 
    - Repeatable: Determine by itself whether it is passed or failed, without a human interpreting the results
    - Single responsibility: One Unit testing test exactly one feature
    - Independent: Run in isolation, separate from any other test cases (even if they test the same functions)
    - Repeatable: Multiple invocations of the test should consistently return the same value. */

/* VERIFY CRYPTOCURRENCY CONFIGURATION TESTS */

/* Check Valid Cryptocurrency: Bitcoin */
test('Bitcoin is valid Cryptocurrency', () => {
    expect(verifyCryptocurrencyType("BTC")).toBeTruthy();
});

/* Check Valid Cryptocurrency: Etherium */
test('Etherium is valid Cryptocurrency', () => {
    expect(verifyCryptocurrencyType("ETH")).toBeTruthy();
});

/* Check Valid Cryptocurrency: Dogecoin */
test('Dogecoin is valid Cryptocurrency', () => {
    expect(verifyCryptocurrencyType("DOGE")).toBeTruthy();
});

/* Check Invalid Cryptocurrency */
test('Etherium is valid Cryptocurrency', () => {
    expect(verifyCryptocurrencyType("SSS")).toBeFalsy();
});

