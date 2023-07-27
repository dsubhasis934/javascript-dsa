let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let array3 = [];
for (i = 0; i <= array1.length - 1; i++) {
    array3[i] = array1[i]
}
for (j = 0; j <= array2.length - 1; j++) {
    array3[array1.length + j] = array2[j]

}
// const array4 = [...array1, ...array2] also we can do this
console.log(array3)
// console.log(array4)