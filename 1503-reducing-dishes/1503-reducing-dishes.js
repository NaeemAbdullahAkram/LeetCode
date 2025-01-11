var maxSatisfaction = function (satisfaction) {
    satisfaction.sort((a, b) => a - b)
    let max = 0
    for (let i = 0; i < satisfaction.length; i++) {
        let sum = 0
        let time = 1
        for (let j = i; j < satisfaction.length; j++) {
            sum += satisfaction[j] * time
            time += 1

            max = Math.max(sum, max)
        }
    }
    return max
};