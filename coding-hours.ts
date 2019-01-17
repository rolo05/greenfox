'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let hours:number = 6 * 5 * 17;
let normalhours:number = 52 * 17

console.log(hours + ' coding hours');

console.log(hours / normalhours * 100 + ' % coding') ;