// maximum iteration need for array sorting is size*size,here i need 8*8
let array1 = [20, 4, 30, 6, 5, 70, 1, 7]
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j <= array1.length; j++) {

        if (array1[j] > array1[j + 1]) {
            let temp = array1[j];
            array1[j] = array1[j + 1];
            array1[j + 1] = temp;
        }
    }
}
console.log(array1)