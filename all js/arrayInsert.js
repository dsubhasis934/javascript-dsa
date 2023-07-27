let array = [1, 2, 3, 5];
// array.push(5); with this function new data always enter the last of the array
//array insert in sepcific position

// document.getElementById("submitform").addEventListener("submit", (e) => {
//     //if we add event submit instead of click it only call this code when the form submitted
//     e.preventDefault()
//     const elem = parseInt(document.getElementById("element").value)
//     const position = parseInt(document.getElementById("element2").value)
//     // const elem = 10;
//     // const position = 2;
//     for (let i = array.length - 1; i >= 0; i--) {
//         if (i > position) {
//             array[i + 1] = array[i]
//         }
//         if (i == position) {
//             array[i] = elem
//         }
//     }
//     console.log(array);

//     

// })
//splice method
const elem = 10;
const position = 2;
//here first argument is number of position for enter new numbwe and second is number of replace
//that means if the second number is 0,then it create  a nex index and third number enter that index,
//if the number is 1,that means it deletes the number after first number position and replace that number
array.splice(2, 0, 100)
console.log(array)
