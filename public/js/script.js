const btn = document.getElementById('btn');
    btn.onclick = function() {
        const name = prompt('Enter your full name.');
        document.getElementById('name').innerText = name;
    }

// variables
const pi = 3.142;
let username = 'emmie';
let age = 90;
let present = false;


// objects
const person = {
    username: 'emmie',
    age: 90,
    present: false,
    child: {
        name: 'Connie',
        friend: {
            name: 'John',
        }
    }
}

console.log(person.username);
person.age = 100;
console.log(person);

console.log(person.username)
console.log(person.age)
console.log(person.present)
console.log(person)

person.username = 'Mimi'
console.log(person.username);

  
  

