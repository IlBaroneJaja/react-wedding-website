function isNumber(value) {
    return typeof value === "number" && !Number.isNaN(value);
}

export default isNumber;