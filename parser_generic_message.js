// This function is called when parsing a value that has a negative minimum value
// Does a 2s complement if the count-th bit of value is set
function checkSign(value, count) {
    count = +count || 32;
    if (count > 32) throw new RangeError('Error');
    value <<= 32 - count;
    value >>= 32 - count;
    return value;
}

// This function parses a value from an encoded  message into a structure.
// The structure is modified in place.
//      binaryString - binary string of the message to parse
//      currentStartIndex - bit offset for where to begin parsing
//      key - dict contains config to parse binaryString and 'value' to store result
function parseValue(binaryString, currentStartIndex, key) {
    key.value = parseInt(binaryString.substring(currentStartIndex, currentStartIndex + key.bits), 2).toString(10);
    if (key.sign) {
        key.value = checkSign(key.value, key.bits);
    }
    if (key.offset) key.value += key.offset;
    key.value *= key.multiplier;
    return currentStartIndex + key.bits;
}

// This function turns a hex string into a binary string
function getBinaryString(message) {
    const buffer = Buffer.from(message, 'hex');
    let binaryString = '';
    for (let i = 0; i < buffer.length; i++) {
        const bin = parseInt(buffer[i], 10).toString(2);
        binaryString += bin;
    }
    return binaryString;
}

module.exports = (rawMessage, struct) => {
    const structure = struct();
    const binaryString = getBinaryString(rawMessage);

    let bitOffset = 0;
    for (const field in structure) {
        bitOffset = parseValue(binaryString, bitOffset, structure[field]);
    }
    return structure;
};
