function formatPhoneNumber(areaCode, phoneNumber) {
    const completePhoneNumber = areaCode + '-' + phoneNumber;
    return completePhoneNumber;
}

module.exports = formatPhoneNumber;
