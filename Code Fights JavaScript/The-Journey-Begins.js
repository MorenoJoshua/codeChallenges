function centuryFromYear(year) {
    let decimal = (year-1) / 100;
    return Math.floor(decimal) + 1;
}