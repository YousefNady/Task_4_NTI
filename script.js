// - create function Return a Boolean if a number is divisible by 10

function fun1() {
    let num = +prompt("Enter A Number To Check If It Is Divisible By 10 Or Not")
    if (num % 10 === 0) {
        console.log(true)
        return
    } else {
        console.log(false)
        return
    }
}
fun1()


// - Create a function that finds the maximum number in an array

arr=[0,1,2,3,4,5,6,7,8,9]
function fun2(array) {
    return Math.max(...array)
    // return Math.min(...array)
}
console.log (fun2(arr))


// - Create a function that reverses an array

test=[  100,
        2000,
        30000,
        400000,
        5000000,
        60000000,
        700000000,
        8000000000,
        90000000000,
        100000000000]
function fun3(array) {
    return array.reverse()
}
console.log (fun3(test))
