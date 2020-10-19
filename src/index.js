module.exports = function toReadable(number) {
    const NUMBERS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    number = String(number);
    let digitCount = number.length;
    let text = "";

    if (digitCount == 3) {
        if (number % 100 == 0) return `${NUMBERS[number[0]]} hundred`;
        text += `${NUMBERS[number[0]]} hundred `;
        number = number.slice(1, 3);
    }

    if (number[0] == 0 && number != 0) return (text += NUMBERS[number[1]]);

    if (NUMBERS.hasOwnProperty(number)) text += NUMBERS[number];

    if (!NUMBERS.hasOwnProperty(number)) {
        text += NUMBERS[number[0] + 0] + " " + NUMBERS[number[1]];
    }

    return text;
};
