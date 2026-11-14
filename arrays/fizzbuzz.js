function fizzBuzz(n) {
    fizzArr = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzArr.push("FizzBuzz")
        } else if (i % 3 === 0) {
            fizzArr.push("Fizz")
        } else if (i % 5 === 0) {
            fizzArr.push("Buzz")
        } else {
            fizzArr.push(i.toString())
        }
    }
    return fizzArr
}

In