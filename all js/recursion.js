// function apple(x) {
//     console.log(x)
//     if (x < 10) {
//         apple(x + 1)
//     }
// }
// apple(0)
//its also called direct recursion
const fact = (x) => {
    return x === 0 ? 1 : x * fact(x - 1);
}
const value = fact(5);
console.log(value)