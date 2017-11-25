// using the example from here:
// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let sayhello = document.getElementById("sayhello");
let showhello = document.getElementById("showhello");

sayhello.addEventListener("click", function(){
    let user = { firstName: "Jane", lastName: "User" };
    showhello.innerText = "Allo, allo " + greeter(user);
});

