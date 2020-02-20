"use strict";


// Шаг 1: создаём div c id "container"
let container = document.createElement("div");
document.body.appendChild(container);
container.id = "container";


// Шаг 2: создаём массив читателей
const people = [{
    id: 1,
    name: "Peter",
    age: 20,
    books: ["Frankenstein", "Notes from The Underground"]
}, {
    id: 2,
    name: "Lisa",
    age: 19,
    books: ["Don Quixote of La Mancha", "Romeo and Juliet"]
}, {
    id: 3,
    name: "Michael",
    age: 22,
    books: ["Frankenstein", "The Art of Computer Programming", "The GULAG Archipelago"]
}, {
    id: 4,
    name: "Greta",
    age: 20,
    books: ["The Communist Manifesto", "50 Shades of Grey"]
}, {
    id: 5,
    name: "Lora",
    age: 21,
    books: ["Don Quixote of La Mancha", "The Divine Comedy"]
}, {
    id: 6,
    name: "Dave",
    age: 23,
    books: ["The Remains of The Day", "Hamlet", "A Brief History of Time"]
}];


//Шаг 3: Создаём <table>
let tableEl = document.createElement("table");
container.appendChild(tableEl);


//Шаг 4: Создаём <thead>,<tr> и 4 <th>
let headEl = document.createElement("thead");
tableEl.appendChild(headEl);

let trEl = document.createElement("tr");
headEl.appendChild(trEl);

const tableHeaders = ["Id", "Name", "Age", "Books"]; // или const tableHeaders = Object.keys(people[0]), но тогда заголовки таблицы будут с маленькой буквы

tableHeaders.forEach(item => {
    let thEl = document.createElement("th");
    thEl.innerText = item;
    trEl.appendChild(thEl);
});


// Шаг 5: заполняем таблицу
let bodyEl = document.createElement("tbody");
tableEl.appendChild(bodyEl);

function fillTable(arr) {
    for (let i = 0; i < arr.length; i++) {
        let tempTrEl = document.createElement("tr");
        bodyEl.appendChild(tempTrEl);

        let person = {}; // деструктуризируем, чтобы не менять исходный массив
        [person.id, person.name, person.age] = [people[i]["id"], people[i]["name"], people[i]["age"]];
        person.books = [...people[i]["books"]].join("\n");

        for (const key in person) {
            let tempTdEl = document.createElement("td");
            tempTdEl.innerText = person[key];
            tempTrEl.appendChild(tempTdEl);
        }
    }
}

fillTable(people);