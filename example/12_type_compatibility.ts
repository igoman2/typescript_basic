interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string
}

var developer: Developer;
var person: Person

var add = function(a: number){
    console.log(add)
}
var sum = function(a: number, b:number){
    console.log(a,b)
}

// add = sum
sum = add

interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2
empty2 = empty1

interface NotEmpty<T> {
    data: T
}

var nempty1: NotEmpty<string>;
var nempty2: NotEmpty<number>;
nempty1 = nempty2
nempty2 = nempty1