let array = [1, 10, 100, 1000, 10000];

// for travarsing
// for (i = 0; i < array.length; i++) {
//     document.write(`array index ${i} value is ${array[i]}<br>`)
// }

//for accesing a soecific element
// let x = 2;
// document.write(`your array ${x} number value is ${array[x]}`)
// get element from a button click
document.getElementById("submitform").addEventListener("click", (e) => {
    e.preventDefault();
    //check validation
    // The issue you're facing is due to the use of document.write() inside the event listener.
    //  When you use document.write() after the page has finished loading,
    //  it replaces the entire content of the page, including the form and input field. 
    //  Therefore, when you click on the input field again,
    //   it cannot find the element 
    //   with the ID "element" because it was replaced by the document.write() call.
    const x = parseInt(document.getElementById("element").value);

    if (x >= 0 && x < array.length) {
        console.log(array[x]);
    } else if (x < 0) {
        alert("Negative values are not allowed.");
    } else {
        alert("Index not found.");
    }

});