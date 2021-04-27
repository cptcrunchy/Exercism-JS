module.exports = {
    validate:  function (num){
        const pwr = num.toString().length
        const armNumber = num.toString().split('').reduce( (a, n) => a + Math.pow(n, pwr), 0)
        return (num === armNumber)
    }
}