/**POO 
 *   // Atributos ES ALGO PROPIO DEL OBJETO
 *   // METODOS BASICAMENTE SON LAS CARACTERISTICAS DE ALGO OH DE UN OBJETO
 * Clases - Modelo ah seguir
 * - Objetos- Son instancias de las Clases
 * 
 * - Atributos - Es una caracteristica o propiedad del Objeto
 * (son variables dentro de un objeto)
 * 
 * - Metodos - Son caracteristicas que un objeto puede 
 * realizar (son funciones dentro de un objeto)
 */

// const animal = {
//   name: "Terranosaurio",
//   sonar(){
//     console.log("Hago sonidos raros")
//   }
// }

// const animal2 = {
//   name: "Cerdo",
//   sonar() {
//     console.log("Hago sonidos raros")
//   }
// }

// // Funcion constructora 
// function Animal(name,genre){
//   // Atributos 
//   this.name = name;
//   this.genre = genre;
// }
// // Metodos
// this.sonar = function () {
//   console.log("I make sounds because i are living")
// }
// this.saludar = function () {
//   console.log(`Hola me llamo ${this.name}`)
// }

// Funcion constructora donde asignamos los metodos al prototipo, 
// no ah la funcion como tal 
function Animal(name, genre) {
  // Atributos 
  this.name = name;
  this.genre = genre;
}
// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function () {
  console.log("I make sounds because are living")
}
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.name}`)
}
const snoopy = new Animal("Peppa","Hembra")
const Jorch = new Animal("Jorch","Macho")
console.log(snoopy)
console.log(Jorch)

snoopy.sonar();
snoopy.saludar();
Jorch.sonar();
Jorch.saludar();