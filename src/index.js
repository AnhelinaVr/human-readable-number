function getDigitText(digit) {
    switch (digit) {
        case '0':
            return 'zero';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
        case '20':
            return 'twenty';
        case '30':
            return 'thirty';
        case '40':
            return 'forty';
        case '50':
            return 'fifty';
        case '60':
            return 'sixty';
        case '70':
            return 'seventy';
        case '80':
            return 'eighty';
        case '90':
            return 'ninety'
        default:
            return undefined;
    }
}

module.exports = function toReadable(number) {
    let prom = 0;
    if (getDigitText(number + '') !== undefined) return (getDigitText(number + ''));
    let result = '';
    if (number / 100 >= 1) {
        result += getDigitText((number + '')[0]) + ' ';
        result += 'hundred';
        prom = number - (Math.floor(number / 100) * 100);
        if (prom == 0) return result;
    } else prom = number;
    if (getDigitText(prom + '') !== undefined) {
        result += ' ' + getDigitText(prom + '');
        return result;
    }
    result += ' ' + getDigitText(((Math.floor(prom / 10)) * 10) + '');
    prom = prom - Math.floor(prom / 10) * 10;
    if (prom !== 0)
        result += ' ' + getDigitText(prom + '');
    return result.replace(/(^\s*)|(\s*)$/g, '');
}