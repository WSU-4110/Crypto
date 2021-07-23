function setEtherium(cryptoName) {
    if (cryptoName == "etherium") {
        return "ETH";
    }
    if (cryptoName == "Etherium") {
        return "ETH";
    }
    return "INVALID";
}

module.exports = setEtherium;
