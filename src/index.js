module.exports = function toReadable (number){
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arr21 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arr22 = [' hundred', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arr3 = ['', ' '], words = '', i = 0, c = 0;
    if (number == 0) {return(arr1[0])};
    if (number > 99) {
        i = (number-(number%100))/100;
        words = words + arr1[i] + arr22[0];
        number = number%100;
        c = 1;
    };
    if (number >= 20){
        i = (number-(number%10))/10;
        words = words + arr3[c] + arr22[i];
        c = 1;
    };
    if ((number < 20) && (number > 9)){
        words = words + arr3[c] + arr21[number%10];
        c = 1;
        return(words);
    };
    number = number%10;
    if (number == 0) {return(words)};
    return(words + arr3[c] + arr1[number]);
}