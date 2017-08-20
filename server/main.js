import {Meteor} from 'meteor/meteor';
import add from './../imports/math';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // class Person {
  //   constructor(name = 'Anonymous', age = 0){
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting(){
  //     return `Hi! I am ${this.name}.`
  //   }
  //
  //   getPersonDescription(){
  //     return `${this.name} is ${this.age} year(s) old`;
  //   }
  // }
  //
  // class Programmer extends Person{
  //   constructor(name, age, pfl = 'JavaScript'){
  //     super(name,age);
  //     this.pfl = pfl;
  //   }
  //
  //   getGreeting(){
  //     return `Hi! I am ${this.name}. I am a ${this.pfl} programmer`;
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title){
  //     super(name, age);
  //     this.title = title;
  //   }
  //
  //   getGreeting(){
  //     if(this.title){
  //       return `Hi! I am ${this.name}. I work as a ${this.title}.`;
  //     } else{
  //       return super.getGreeting();
  //     }
  //   }
  //
  //   hasJob(){
  //     return !!this.title;
  //   }
  // }
  //
  // let jason = new Programmer('Jason', 20, 'Python');
  // console.log(jason.getGreeting());

});

// let house = {
//   bedrooms: 2,
//   bathrooms: 1.5
// };
// let yearBuilt = 1995;
//
// let newObject = {
//   ...house,
//   bedrooms: 3,
//   yearBuilt,
//   flooring: 'Carpet'
// };
//
// console.log(newObject);
