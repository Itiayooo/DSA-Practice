function countResponseTimeRegressions(responseTimes) {
    // Write your code here
    if (!responseTimes || responseTimes.length <= 1) {
        return 0
    }

    let count = 0
    let sum = responseTimes[0]
    for (let i = 1; i < responseTimes.length; i++) {
        let average = sum / i
        if (responseTimes[i] > average)
            count++
        sum += responseTimes[i]
    }
    return count

}