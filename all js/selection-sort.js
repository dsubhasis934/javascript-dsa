function selectionSort() {
    let arr = [10, -3, 9, 3, 5, 6, 1];
    let current = arr.length - 1
    // for (i = 0; i <= arr.length - 1; i++) {
    //     for (j = 0; j <= current; j++) {
    //         if (arr[j] > arr[current]) {
    //             let temp = arr[j]
    //             arr[j] = arr[current];
    //             arr[current] = temp
    //         }
    //     }
    //     current--


    // }

    //decending order
    for (i = arr.length - 1; i >= 0; i--) {
        let mindId = i;
        for (j = i - 1; j >= 0; j--) {
            if (arr[j] < arr[mindId]) {
                mindId = j
            }
            let temp = arr[mindId]
            arr[mindId] = arr[i];
            arr[i] = temp
        }


    }

    console.log(arr);
}
selectionSort()