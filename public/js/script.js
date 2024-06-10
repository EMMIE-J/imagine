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

//change
person.age = 100;
console.log(person);

console.log(person.username)
console.log(person.age)
console.log(person.present)
console.log(person)

person.username = 'Mimi'
console.log(person.username);

// //Arrays
// const  bottle1 = {
//   size: 'large',
//   color:'yellow',
// }



// const bottle2 = {
//   size:'small',
//   color: 'blue',
// }


// const bottles = [bottle1, bottle2,]
// bottles.push(bottle1);
// bottles.push(bottle2);
// bottles;
// bottles[0].size;


// const date = new Date ();
// date.getDay();

// //if Else
// const age = 18;
// if (age >= 18) {
//   'You are true';
// } else{
//   'You are false';
// }

// //For/Loop (position of loop exp 1; position 2 where it ends;position 3 the kind if steps they will take. i++ increment operator/ i)
// for(let i = 0; i <= 5; i+=2) {
//   console.log('We did it!',i);
// }

//   // Functions
// //  Defining a function
// function login(username, password) {
//     // Validate username and password
//     if (!username || !password) {
//       return 'Username or password not provided';
//     }
//     if (username =='emmie' && password == '1234') {
//       return 'User is logged in';
//     } else {
//       return 'Invalid username or password';
//     }
//   }
  
//   // Invoking a function
//   login('emmie');
  
  
//   //  Basic Arithmetic Operations
//   11+12;
//   4+6;
//   5-3;
//   50-35;
//   60/7;
//   5*6;
//   14 % 3;
  
//   Math.floor(45/24);
//   45 % 24
//   Math.random() * 1000
//   Math.max(34,32,37);
//   2* (3+4) - 5/2;


//  // the use of Num()
// Number('2')+2


// //strings in JavaScript
// //concatenation
// const firstname = 'Emmie';
// const lastname = 'Jennings';
// firstname +  ' ' +  lastname;


// //Template Literal
// '${firstname}  ${lastname}';

// let fullName = 'Emmie Jennings'

// fullName.length
// fullName.toUpperCase()
// fullName.toLowerCase()
// fullName.charAt(5)
// fullName.charAt(7)
// fullName.slice(6,11)
// fullName.split('')
// fullName.replace('Emmie','Jennings')
// fullName.indexOf('ings')

// //string conversion
// Number('3.243')
// parseInt('3.243')
// parseFloat('3.243')
// let amount = 1800
// console.log('GHS${amount}')
// amount.toString()
  

