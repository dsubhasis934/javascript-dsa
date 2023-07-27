const array = [1, 2, 4, 5, 9, 18];
let pos = 2;
for (let i = pos; i <= array.length - 1; i++) {
    array[i] = array[i + 1]
}
array.length = array.length - 1;
//array.pop(); also we can do this
//array.splice(2,1) we also do that
console.log(array);