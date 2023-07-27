// const thirdFunction = () => {
//     let data = "welcome to third function"
//     console.log(data)
// }
// const secondFunction = () => {
//     thirdFunction()
//     console.log("welcome to the second function")
// }
// const firstFunction = () => {
//     secondFunction()
//     console.log("welcome to the first function")
// }//if we run this code then it stored first in called stack,run the third function first then run second then first
// firstFunction();
//callstack is a process where we see that firstFunction stored in the stack first and other functions stored sequencely..and then fnally call the thirdFunction


//now start head and tail recursion
function test(x) {
    // console.log(x); //its called head recusrion cause it called before the same function calling
    if (x > 0) {
        test(x - 1)
    }
    console.log(x) //this called tail recursion here also we see first all the called functions stored into stack
    //when x becomes =0,then all the values print 0-7 cause 0 entered last in stack
}
test(7)