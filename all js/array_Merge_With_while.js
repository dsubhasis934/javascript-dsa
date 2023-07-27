let array1 = [3, 7, 12, 34, 54, 64];
let array2 = [4, 9, 25, 45, 76, 65];
let array3 = [];
let i1 = 0, i2 = 0; i3 = 0;
while (i1 < array1.length && i2 < array2.length) {
    if (array1[i1] < array2[i2]) {
        array3[i3] = array1[i1];
        i1++;
    } else {
        array3[i3] = array2[i2];
        i2++;
    }
    i3++;
}
if (array1.length < array2.length) {
    while (i2 < array2.length) {
        array3[i3] = array2[i2];
        i2++;
        i3++
    }
} else {
    while (i1 < array1.length) {
        array3[i3] = array1[i1];
        i1++;
        i3++
    }
}
console.log(array3)