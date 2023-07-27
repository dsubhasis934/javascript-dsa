//insertion sort
//in this insertion sort we have an array where we sort array by travarse it reversely
let arr = [14, 2, 12, 11, 13, 5, 6];
function insertionSort(data) {
    for (i = 1; i < data.length; i++) {
        let current = data[i]; //here we take the second element of array for comparison
        let j = i - 1;//take first element of the array
        while (j >= 0 && data[j] > current) {
            data[j + 1] = data[j];
            j = j - 1; //continue the loop
        }
        data[j + 1] = current; //enter our selected element
    }
}
insertionSort(arr);
console.log(arr)