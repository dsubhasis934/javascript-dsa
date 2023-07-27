//Map is similer to object
//but in object we have key always string datatype,but in map we can have any dataType as key
let data = new Map([
    ['name', 'subho'],
    [1, 'demon'],
    [true, 'ok']
])
// data.set('color', 'red')
// console.log(data)
// console.log(data.size)
// console.log(data.has(2))
for (x of data) {
    console.log(x)
}