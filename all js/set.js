//so set is like array but it has some unique property
//like array print dublicate values but set dont print that
let data = new Set(['a', 'n', 'a'])
let arr = ['a', 'n', 'a']
data.add('b')
data.delete("a") //it delete that extra a
data.add('a') //its not added
data.add({ 'a': 'ok' }) //we also add objects here
// console.log(arr);
console.log(data)
console.log(data.size)
console.log(data.entries())