// converting values in an array
// old style
function add(nums) {
    console.log(arguments);
}
add(2, 3, 4)

// converting a group of numbers in an array
function subs(...nums) {
    console.log(nums);
}
subs(1, 2, 3, 4, 5, 6)

// arrowFunctions

function mul(...nums) {
    let total = nums.reduce((x, y) => {
        return x * y
    })
    console.log(total)
}
mul(1, 2, 3, 4)

function div(...nums) {
    let total = nums.reduce((x, y) => x * y);
    console.log(total);
}
div(1, 2, 3, 4, 5)