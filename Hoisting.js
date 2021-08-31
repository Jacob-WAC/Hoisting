//1
console.log(hello);
var hello = "world";
//undefined

//2
var needle = "haystack";
test();
function test() {
    var needle = "magnet";
    console.log(needle);
}
// console.logs everything as normal because of hoisting

//3
var brendan = "super cool";
function print() {
    brendan = "only okay";
    console.log(brendan);
}
console.log(brendan);
//prints out super cool

//4
var food = "chicken";
console.log(food);
eat();
function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}
//prints chicken and then half-chicken

//5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
};
console.log(food);
//gives an error because mean is hoisted but not assigned

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//genre is undefined first and then later disco, function runs as normal

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//prints dojo and then runs the function and then prints dojo again

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    } else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// can't reassign const variable
