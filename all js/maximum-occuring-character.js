function occuringCharacter(str) {
    let obj = {}
    for (i = 0; i < str.length; i++) {
        let key = str[i]
        if (!obj[key]) {
            obj[key] = 0
        }
        obj[key]++;
    }
    console.log(obj)
}
let string1 = "adam"
occuringCharacter(string1)