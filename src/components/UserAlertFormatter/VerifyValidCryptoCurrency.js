function verifyValidCryptocurrency(currency) {
    if (currency == "BTC") {
        return true;
    }
    if (currency == "ETH") {
        return true;
    }
    if (currency == "DOGE") {
        return true;
    }
    return false;
}

module.exports = verifyValidCryptocurrency;
