class stack {
    constructor(data = [], dataLength = data.length) {
        this.data = data,
            this.dataLength = dataLength
    }
    push(item) {
        this.data[this.dataLength] = item;
        this.dataLength = this.dataLength + 1;
    }
    pop() {
        if (this.dataLength < 0) {
            return "Stack Underflow";
        } else {
            const temp = this.data[--this.dataLength];
            // this.dataLength = this.dataLength - 1;
            this.data.length = this.dataLength
            // console.log(temp)
        }
    }
    display() {
        console.log(this.data)
    }

}
const st1 = new stack();
st1.push(20);
st1.push(40);
st1.push(70)
st1.pop();
st1.pop();
st1.display() //we can also do this by terminal