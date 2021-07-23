function setDogecoin(cryptoName) {
    if (cryptoName == "dogecoin") {
        return "DOGE";
    }
    if (cryptoName == "Dogecoin") {
        return "DOGE";
    }
    return "INVALID";
}

module.exports = setDogecoin;
