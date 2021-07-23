function verifyPhoneNumberLength(pn) {
    if (pn.length == 12) {
        return true;
    }
    return false;
}

module.exports = verifyPhoneNumberLength;
