/* Array en JavaScript */

'use strict';

var my_array = new Array();

var other_array = [];

my_array = [1,3,3,3,4,4,555,55,666,6,6,666666];

console.log(my_array);

console.log(my_array[3]);

other_array = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

console.log(other_array);

/* metodos sobre los arreglos */

// Agregando elemento despues de la ultima posicion

my_array.push('meses');

other_array.push('año 2015');

console.log(other_array);

console.log(my_array);

// Eliminar el ultimo elemento
my_array.pop();

other_array.pop();

// eliminar el primer elemento
my_array.shift('enero');

other_array.shift();

console.log(other_array);

console.log(my_array);


// Organizar elementos
my_array.sort();

other_array.sort();

console.log(other_array);

console.log(my_array);

var tasks = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto'];

console.log(tasks);

tasks.splice(1,5, "enero", "febrero", "marzo", "abril", "mayo");

console.log(tasks);
