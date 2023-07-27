function anagram(str1, str2) {
    let first = str1.split("").sort().join("")
    let second = str2.split("").sort().join("")
    if (first == second) {
        console.log("its anagram")
    } else {
        console.log("its not anagram")
    }
}
let string1 = "adam";
let string2 = "mada"
anagram(string1, string2)