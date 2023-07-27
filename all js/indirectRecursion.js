let money = 100;
let totalApple = 0;
function buyApple(x) {
    if (x > 0) {
        console.log(`now you have ${x} Rs and ${totalApple} apples`)
        buyMore(x)
    } else {
        console.log(`you dont have enough money but ${totalApple} apples`)
        return
    }
}
function buyMore(x) {
    totalApple = totalApple + 1;
    buyApple(x - 10);
}
buyApple(money)