function setBitcoin(cryptoName) {
    if (cryptoName == "bitcoin") {
        return "BTC";
    }
    if (cryptoName == "Bitcoin") {
        return "BTC";
    }
    return "INVALID";
}

module.exports = setBitcoin;
