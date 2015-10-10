
/* objetos y funciones */
var my_object = new Object();

var other_object = {};

my_object_1 = {
	firstName: 'Sandra Liliana',
	lastName: 'Fontalvo Acosta',
	phone: '759 2466'
};

my_object_2 = {
	firstName: 'nombre 2',
	lastName: 'apellido 2',
	phone: 'teléfono 2'
};

my_object_3 = {
	firstName: 'nombre 3',
	lastName: 'apellido 3',
	phone: 'teléfono 3'
};


console.log(my_object_1.firstName);

console.log(my_object_1['lastName']);

console.log(my_object_1['phone']);

console.log(my_object_2.firstName);

console.log(my_object_2['lastName']);

console.log(my_object_2['phone']);

console.log(my_object_3.firstName);

console.log(my_object_3['lastName']);

console.log(my_object_3['phone']);


var key;

for(key in my_object){
	console.log(my_object_1[key]);
}

for(key in my_object){
	console.log(my_object_2[key]);
}

// Funciones

function sum(){
	console.log(50+100+200);
}

sum();

function rest(){
	console.log(200-100);
}

rest();

function mult(){
	console.log(20*10);
}

mult();

function div(){
	console.log(200/10);
}

div();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();