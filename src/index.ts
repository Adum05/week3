console.log('It worked');

//let user = {
//    name: 'Aday',
//    age: 18
//};

function logObject(user: {name: string, age: number}) {
    user.name = 'Luca'
    console.log(user.name);
}

//logObject(user);

class User{
    name: string = '';
    age: number = 0;

    constructor(name:string, age: number) {

    }
}

//let user1 = new User();
//user1.name = 'Aday'
//user1.age = 18
//logObject(user1);

//let user2 = new User();
//user2.name = 'Juan'
//user2.age = 19
//logObject(user2);

//user1.name = 'Mathew'

//logObject(user1);
//logObject(user2);

//console.log(user1.name);

let user = new User('Aday', 18);
logObject(user);