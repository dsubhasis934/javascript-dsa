//here we first divided the list into two parts
//then we search our element,if it present in mid then ok
//if not we serach front and back
function binarySearch() {
    let arr = [10, 25, 37, 48, 78, 97];
    let value = 10;
    arr.sort();
    let front = 0;
    let rear = arr.length - 1;

    while (front <= rear) {
        mid = Math.ceil((front + rear) / 2);
        if (arr[mid] == value) {
            console.log(`your value is in ${mid} position`)
            return
        } else if (arr[front] == value) {
            console.log(`your value is in ${front} position`)
            return
        } else if (arr[rear] == value) {
            console.log(`your value is in ${rear} position`)
            return
        }
        else if (value < arr[mid]) {
            rear = mid;
            front = front + 1;
        } else {
            front = mid;
            rear = rear - 1
        }
    }
    console.log("your element not found")
}
binarySearch()