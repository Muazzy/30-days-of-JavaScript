// // Create an empty object called dog
// // Print the the dog object on the console
// // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// // Get name, legs, color, age and bark value from the dog object
// // Set new properties the dog object: breed, getDogInfo

// // const dog = {

// // }
// // console.log(dog)

// const dog = {
//     name: 'waffles',
//     color: 'brown',
//     age: 2,
//     bark: function () {
//         return `${this.name} says Woof Woof!`
//     },
// }

// console.log(Object.values(dog));  //Array(4) [ "waffles", "brown", 2, bark() ]

// dog.breed = 'Husky'
// dog.getDogInfo = function () {
//     let fullSentence = `This dog's name is ${this.name} & he is ${this.age} years old.\nHe has ${this.color} furrs.\n`;
//     return fullSentence;
// }

// console.log(dog.getDogInfo())