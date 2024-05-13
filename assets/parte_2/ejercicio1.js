function Person(nombre, apellido, edad,) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
Person.prototype.saludar = function (){
  return `Hola soy ${this.name} y tengo ${this.edad}`
}
function Student(nombre,apellido,edad,promedio, cursos) {
  // Llamando al constructor de person 
  Person.call(this, nombre, apellido, edad);
  this.promedio = promedio; 
  this.cursos = cursos;
}
// Estableciendo la herencia
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.presentarExamen = function () {
  console.log('Estoy presentando un examen.');
};
Student.prototype.saludar = function () {
  return `${Person.prototype.saludar.call(this)} Y estoy saludando`;
};
const student1 = new Student("Juan","Agudelo",17,4.6,['MYSQL','JavaScript'])
console.log(student1.saludar())
console.log(student1)