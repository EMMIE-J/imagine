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

//Arrays
 const  bottle1 = {
size: 'large',
color:'yellow',
 }



const bottle2 = {
size:'small',
color: 'blue',
}


const bottles = [bottle1, bottle2,]
bottles.push(bottle1);
bottles.push(bottle2);
bottles;
bottles[0].size;


const date = new Date ();
date.getDay();

 //if Else
const age = 18;
if (age >= 18) {
 'You are true';
 } else{
'You are false';
}

//For/Loop (position of loop exp 1; position 2 where it ends;position 3 the kind if steps they will take. i++ increment operator/ i)
for(let i = 0; i <= 5; i+=2) {
console.log('We did it!',i);
}

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


 // the use of Num()
Number('2')+2


//strings in JavaScript
//concatenation
const firstname = 'Emmie';
const lastname = 'Jennings';
firstname +  ' ' +  lastname;


//Template Literal
'${firstname}  ${lastname}';

let fullName = 'Emmie Jennings'

fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(5)
fullName.charAt(7)
fullName.slice(6,11)
fullName.split('')
fullName.replace('Emmie','Jennings')
fullName.indexOf('ings')

//string conversion
Number('3.243')
parseInt('3.243')
parseFloat('3.243')
let amount = 1800
console.log('GHS${amount}')
amount.toString()
  


// Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email) {
  //  Check if email was provided
  if (!email) {
    return 'No email provided';
  }
  
  // Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided';
  }


// Add email to partcipants
  participants.push(email);
  return 'Participant added'; 
}

addParticipant('attachiegrace408@gmail.com');
addParticipant('graceattachie408@gmail.com');
addParticipant();
addParticipant('attachiegrace408')
participants;



// // Arrays in JavaScript
// const users = [
//   {
//    username: 'emmie-j',
//     password: '0123',
//     email: 'attachiegrace408@gmail.com'
//   },

//   {
//    username: 'rammie',
//     password: '1234',
//     email: 'rammie1000@yahoo.com'
//   },
  
// ];
// users;

// Write a function that will take a user with firstname, lastname and fullname;
function fullName(user) {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
 };
}
const user = {
  firstname: 'John',
  lastname: 'Quayson'  
}

fullName(user);


// Array map
const users = [
{firstname:  'Emmie', lastname: 'Jennings'},
{firstname: 'Eliana', lastname: 'Ranyke'},
{firstname: 'Elvis', lastname: 'Ranyke'},
{firstname: 'Cyrus', lastname: 'Ranyke'},
{firstname: 'Queeneth', lastname: 'Lamptey'}
]
// users.map(fullName);



// Square of Numbers
function square(number) {
  return number **2;
}
square(7);


const numbers = [9, 8, 7, 6];
numbers.map(square);

// Array filter

// Write a function that takes a number, if the number is odd, return it as false and return as true if the number is even.

function isEven(number) {
  return number % 2 ===0;
}
isEven(6);
numbers.filter(isEven);


Write a function that will allow a user to reset their password
// const user = {
//   email: "attachiegrace408@gmail.com",
//   password: '01234',
// }

 function resetPassword(email, newPassword) {
  // Check if email and new password was provided
   if (!email || !newPassword) {
     return 'Email or password not provided';
   } 
   // Check if provided email is correct
   if (email ===user.email) {
     // Update password with new one
     user.password = newPassword;
  return 'Password reset successful';
 }
if (email  !== user.email){
  return "Invalid email"
  }
}

user;
resetPassword("attachiegrace408@gmail.com");
user;
   
 














  

















