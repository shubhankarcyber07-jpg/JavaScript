// singleton object

const tinderUser = new Object(); // singleton object constructor

const tinderUser2 = {}; // non singleton object literal

console.log(tinderUser); // {}
console.log(tinderUser2); // {}

// difference between singleton object and non singleton object is that singleton object can only have one instance, while non singleton object can have multiple instances.

tinderUser.id = "123abc";
tinderUser.name = "Shubhankar";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Shubhankar', isLoggedIn: false }



const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Shubhankar", 
            lastName: "Sasmal"
        }
    }
};

console.log(regularUser.fullName.userFullName.firstName); // Shubhankar

console.log(regularUser.fullName?.userFullName.firstName); // Shubhankar

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 }; // { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }

 
// const obj3 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj3 = Object.assign({}, obj1, obj2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }   
console.log(obj3);