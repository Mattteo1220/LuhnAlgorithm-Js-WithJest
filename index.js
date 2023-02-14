// drop last digit in array 

const isDivisibleBy2 = (num) => {
    return num % 2 === 0;
}

const validateCred = (accountNumber) => {
    accountNumber.pop();

    let doubled = accountNumber.map(num => {
        if(isDivisibleBy2(accountNumber.indexOf(num))){
            let result = num * 2;
            // if(result > 9){
            //     num -= 9;
            // }
            return result;
        }
        return num;
    });
    console.debug(doubled);


    let sum = 0;
    for(let number of doubled){
        sum += number;
    }
    console.debug(`Sum: ${sum}`);

    return (sum % 10 === 0 ? true : false);
}


module.exports = {
    validateCred,
    isDivisibleBy2 : isDivisibleBy2
};