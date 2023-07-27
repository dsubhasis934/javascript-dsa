let arr = [-1, 2, 11, 12, 1, 5, 6];
function bubbleSort(data, count) {
    if (count == 1) {
        return
    }
    for (i = 0; i < count; i++) {
        if (data[i] > data[i + 1]) {
            temp = data[i];
            data[i] = data[i + 1];
            data[i + 1] = temp;
        }

    }
    bubbleSort(data, count - 1)
}
bubbleSort(arr, arr.length);
console.log(arr)