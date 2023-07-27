// const array1 = [1, 3, 2, 4];
// const array2 = [];
// for (let i = array1.length - 1; i >= 0; i--) {
//     array2.push(array1[i])
// }
// console.log(array2)

//array reverse with recursion
const array1 = [4, 3, 5, 9];
function reverseArray(data, start, end) {
    console.log(array1)
    if (start <= end) {
        let temp = data[start];
        data[start] = data[end];
        data[end] = temp
        reverseArray(data, start + 1, end - 1)
    }
}
reverseArray(array1, 0, array1.length - 1)