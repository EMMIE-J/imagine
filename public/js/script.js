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

  // Functions
//  Defining a function
function login(username, password) {
    // Validate username and password
    if (!username || !password) {
      return 'Username or password not provided';
    }
    if (username =='emmie' && password == '1234') {
      return 'User is logged in';
    } else {
      return 'Invalid username or password';
    }
  }
  
  // Invoking a function
  login('emmie');
  
  
  //  Basic Arithmetic Operations
  11+12;
  4+6;
  5-3;
  50-35;
  60/7;
  5*6;
  14 % 3;
  
  Math.floor(45/24);
  45 % 24
  Math.random() * 1000
  Math.max(34,32,37);
  2* (3+4) - 5/2;
  Number('ty') + 2
  

