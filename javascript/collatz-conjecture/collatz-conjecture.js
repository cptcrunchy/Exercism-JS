export const steps = (n, count = 0) => {
    if (n <= 0) throw "Only positive numbers are allowed"
    if (n === 1) return count
    const num = (n % 2 === 0) ? n/2 : n*3 + 1

    return steps(num, count+1)
}