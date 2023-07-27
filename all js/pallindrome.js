function pallindrome(str) {
    // let str1 = str.split("").reverse().join("");
    //also we can do this
    let str1 = "";
    for (i = str.length - 1; i >= 0; i--) {
        str1 += str[i];//str1=str1+str
    }
    if (str1 == str) {
        console.log("its pallindrome")
    } else {
        console.log("its not pallindrome")
    }
}
let string1 = "lol"
pallindrome(string1)