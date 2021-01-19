// 자바스크립트의 변수

// var , let ,const

// var 예전에 사용했던 변수 (더 이상 사용하지 않는 것이 좋음)

// let
// let age = 30;
// age = 25;
// console.log(age)
// 재정의가 가능

// const
// const age= 30;
// age = 26;
// console.log(age)
// 재정의가 불가능

// data-type
// String , Number , Boolean, null, undefined

/*
const name = "hong";
const age = 29;
const weight = 70.9;
const inMale = true;
const money = null;
const girlfriend = undefined;
let boyfriend;
console.log(typeof boyfriend)
*/
// String
const name = "Hong eun ki";
const age = 29;
const hobby = "football, computer, game";
console.log("내 이름은 " + name + "입니다.");
console.log(`내 이름은 ${name}입니다. 나이는 ${age}살 입니다.`)
console.log(name.substring(1, 3))
console.log(name.substring(0, 9).toUpperCase());
console.log(name.split(" "))
console.log(hobby.split(","))
console.log(hobby.split(",")[2])

// Aray
const animal = ["lion", "bear", "monkey"];
console.log(animal);
console.log(animal[1]);
animal[3] = "deer";
console.log(animal);
//const 이지만 배열에서 더하거나 뺄수는 있음 그러나 재정의는 불가능
animal.push("gorani"); // 배열에 추가
console.log(animal);
animal.unshift("hippo"); // 제일 앞으로 추가
console.log(animal);
animal.pop;
console.log(animal);

console.log(Array.isArray(animal)) // 배열인지 아닌지
console.log(animal.indexOf("bear")) // 몇번째 인덱스인지

const bearIndex = animal.indexOf("bear");

animal.splice(bearIndex, 1); // 제거

console.log(animal);

// Object
const monkey = {
    name: "son",
    face: "funny",
    age: 11,
    food: ["banana", "apple", "mango"],
    tail: true,
    location: {
        country: "Japan",
        place: "forest",
        isJapan: true,
    }
}
console.log(monkey);
console.log(monkey.location.country);

//alert(monkey); // Object 확인이 어려워 Console 창으로 확인하는게 좋음

monkey.name = "mong"
console.log(monkey);

monkey.food[1] = "amond";
console.log(monkey.food[1]);

monkey.weight = 23;
console.log(monkey);


// JSON
const monkeyJSON = JSON.stringify(monkey);

console.log(monkeyJSON);

const monkeyJSONParse = JSON.parse(monkeyJSON); // JSON 변환한것을 다시 Object로 파싱
console.log(monkeyJSONParse);
console.log(monkeyJSONParse.name);