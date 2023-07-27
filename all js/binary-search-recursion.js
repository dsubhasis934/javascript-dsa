function binarySearch(arr, front, rear) {
    let val = 3;
    while (front <= rear) {
        mid = Math.ceil((front + rear) / 2);
        if (arr[mid] == val) {
            console.log(`your data find in ${mid} position`)
            return
        }
        else if (arr[front] == val) {
            console.log(`your data find in ${front} position`)
            return
        }
        if (arr[rear] == val) {
            console.log(`your data find in ${rear} position`)
            return
        } else if (val < arr[mid]) {
            binarySearch(arr, front + 1, mid - 1)
        } else {
            binarySearch(arr, mid + 1, rear - 1)
        }
    }
}
let arr = [1, 2, 3, 4, 5];
binarySearch(arr, 0, arr.length - 1)