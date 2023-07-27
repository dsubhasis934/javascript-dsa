let data = [];
let dataLength = data.length;
let max = 5
function push(value) {
    if (dataLength < max) {
        data[dataLength] = value;
        dataLength = dataLength + 1
        console.log(data)
    }
}
function pop() {
    if (dataLength > 0) {
        dataLength = dataLength - 1
        data.length = dataLength
        console.log(data)
    }
}
push(10);
push(20);
push(30);
push(40);
push(50);
pop()
push(60)
