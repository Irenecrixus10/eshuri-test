/**
 * print all primes of given number
 * @param number 
 * @returns array
 */
function getPrimes(number) {
    const initNumber = 1;
    const limitNumber = number;
    let primes = [];

    for (let i = initNumber; i <= limitNumber; i++) {
        let flag = 0;

        // looping through 2 to user input number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        // if number greater than 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            primes.push(i);
        }
    }

    return primes;
}

/**
 * Check if a number is prime number
 * @return void
 */
function checkPrime() {
    const number = document.getElementById('number').value;
    let isPrime = true;
    let outPut = document.getElementById('output');

    // check if number is equal to 1
    if (number === 1) {
        outPut.innerHTML = "1 is neither prime nor composite number.";
    }else if (number > 1) {

        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            outPut.innerHTML = `1`;
        } else {
            outPut.innerHTML = getPrimes(number);
        }
    } else {
        outPut.innerHTML = "The number is not a prime number.";
    }
}
