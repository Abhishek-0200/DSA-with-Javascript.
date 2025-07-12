var romanToInt = function (s) {
    let defintion = new Map([
        ["I", 1], ["V", 5], ["X", 10],
        ["L", 50], ["C", 100], ["D", 500], ["M", 1000]
    ]);

    let result = defintion.get(s[s.length - 1]);
    let prev_value = result;

    for (let i = s.length - 2; i >= 0; i--) {
        let current_value = defintion.get(s[i]);

        if (current_value < prev_value) {
            result -= current_value;
        } else {
            result += current_value;
        }

        prev_value = current_value;
    }

    return result;
};

console.log(romanToInt("III"))