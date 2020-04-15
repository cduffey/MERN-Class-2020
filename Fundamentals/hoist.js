// #1
// Predicted: Error, hello is uninitialized 
// Actual: undefined
var hello;
console.log(hello);                                   
hello = 'world';  

// #2
// Predicted:  magnet
// Actual: magnet
var needle;
needle = 'haystack';
function test(){
        var needle;
        needle = 'magnet';
        console.log(needle);
}
test();

// #3
// Predicted: 
// only okay
// super cool 
// Actual: super cool
var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// #4
// Predicted: 
// chicken
// half-chicken 
// Actual:
// chicken
// half-chicken 
var food;
food = 'chicken';
function eat(){
        var food;
        food = 'half-chicken';
        console.log(food);
        food = 'gone';
}
console.log(food);
eat();

// #5
// Predicted: Error
// Actual: Error, mean is not a function
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);

// #6
// Predicted:  
// undefined
// rock
// r&b
// disco
// Actual:
// undefined
// rock
// r&b
// disco
var genre;
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// #7
// Predicted: Error
// Actual:
// san jose
// seattle
// burbank
// san jose
function learn() {
        var dojo;
        dojo = "seattle";
        console.log(dojo);
        dojo = "burbank";
        console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);


// #8
// Predicted:  
// {"Chicago", 65, true}
// closed for now
// Actual: Error, assignment to a constant variable
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
