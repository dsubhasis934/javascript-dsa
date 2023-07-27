let array = [1, 2, 3, 5, 9, 5];
let pos = 3;
let element = 5
for (i = 0; i <= array.length - 1; i++) {
    //search a perticuler index element
    // if (pos == i) {
    //     console.log(`the value of your ${pos} number is ${array[i]}`);
    // }
    //for search a perticuler element index number
    if (array[i] == element) {
        console.log(`your index number of given value is ${i}`)
        //break; if i use break here,when it find the elemnent first it stop execution
    }
}