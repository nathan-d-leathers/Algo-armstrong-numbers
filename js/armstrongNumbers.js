// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(input) {

    let result = [];
    let numString;
    let answer;

    for (let num = 1; num <= input; num++) {
        answer =0;
        numString = num.toString().split('');
        expo = numString.length;
        for (let i =0; i< numString.length; i++) {
            numString[i] = (numString[i] * 1) ** expo;
            answer += numString[i] ;
        if (answer === num) {
            result.push(answer);
            }
        }
    }
    return result;
};
