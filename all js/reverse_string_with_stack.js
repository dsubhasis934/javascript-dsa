// let data = [];
// let stringLength = data.length
// function push(item) {
//     data[stringLength] = item;
//     stringLength = stringLength + 1;
//     // console.log(data)
// }
// function pop() {
//     if (stringLength > 0) {
//         let dataItem = data[stringLength - 1]
//         stringLength = stringLength - 1;
//         data.length = stringLength;
//         return dataItem
//     }
// }
// function reverseString(rs) {
//     for (i = 0; i <= rs.length - 1; i++) {
//         push(rs[i])
//     }
//     for (i = 0; i <= rs.length - 1; i++) {

//         rs[i] = pop();
//     }
// }
// let str = "welcome";
// str = str.split("");//its break string into array
// reverseString(str)
// console.log(str.join(""))//output will be [w,'e','l


//with class

class reverseString {
    constructor(data = [], data2 = [], dataLength = data.length) {
        this.data = data;
        this.dataLength = dataLength;
        this.data2 = data2
    }
    push(str) {
        str = str.split("");
        for (let i = 0; i <= str.length - 1; i++) {
            this.data[this.dataLength] = str[i];
            this.dataLength = this.dataLength + 1;
        }
    }
    display() {
        console.log(this.data2.join(""))
    }
    pop() {
        for (let i = 0; i <= this.data.length - 1; i++) {
            this.data2[i] = this.data[this.dataLength - 1];
            this.dataLength = this.dataLength - 1;

        }
        return this.data2
    }
}
let r = new reverseString();
r.push("adam");
r.pop();
r.display()
