
// Creacion de instancia de la Clase
// class Ave {
//   // Propieades
//   constructor(tipoDePico,tiPoDeAlas,habitat,genero,nombre,edad){
//     this.tipoDePico = tipoDePico
//     this.tiPoDeAlas = tiPoDeAlas
//     this.habitat = habitat
//     this.genero = genero
//     this.nombre = nombre
//     this.edad = edad
//     this.estaVivo = true
//   }
//     // Metodos 
//     volar(){
//       console.log(`${this.nombre} esta volando`)
//     }
//     cantar(){
//       console.log(`${this.nombre} esta cantando`)
//     }
//     construirNido(){
//       console.log(`${this.nombre} esta constryendo un nido`)
//     }
//     comer(){
//       console.log(`${this.nombre} esta comiendo`)
//     }
//     dormir(){
//       console.log(`${this.nombre} esta durmiendo`)
//     }
//     darLuz(){
//       console.log(`${this.nombre} esta dando ah luz`)
//     }
//     incubarHuevos(){
//       console.log(`${this.nombre} esta poniendo huevos`)
//     } 
// }

// const ave1 = new Ave("pico corto", "Alas grandes", "selva", "Hembra", "Visitador", 2);
// console.log(ave1)
// ave1.incubarHuevos()
// ave1.cantar()
// ave1.dormir()

// FELINO

class Felino {
  constructor(tipoDePelaje,habitat,tipoDeGarras,sexo,nombre,edad,placenta){
    this.tipoDePelaje = tipoDePelaje
    this.habitat = habitat
    this.tipoDeGarras = tipoDeGarras
    this.sexo = sexo
    this.nombre = nombre
    this.edad = edad
    this.estaVivo = true 
    this.placenta = placenta
  }

  cazar(){
    console.log(`${this.nombre} esta cazando`)
  }
  trepar(){
    console.log(`${this.nombre} esta trepando` )
  }
  ronronear(){
    console.log(`${this.nombre} esta ronroneando`)
  }
  comer(){
    console.log(`${this.nombre} esta comiendo`)
  }
  dormir(){
    console.log(`${this.nombre} esta durmiendo`)
  }
  darLuz(){
    console.log(`${this.nombre} esta dando ah luz`)
  }
}
const Felino1 = new Felino("Largo","Bosque","Afiladas","Hembra","Princesa",10,true)
console.log(Felino1)
Felino1.darLuz()

// PEZ
class Pez {
  constructor(tipoDeAletas, tipoDeEscamas, habitat, sexo,nombre,edad,estaVivo,tipoDehuevo){
    this.tipoDeAletas = tipoDeAletas
    this.tipoDeEscamas = tipoDeEscamas
    this.habitat = habitat
    this.sexo = sexo
    this.nombre = nombre
    this.edad = edad
    this.estaVivo = estaVivo
    this.tipoDehuevo = tipoDehuevo
  }
  
  nadar(){
    console.log(`${this.nombre} esta nadando`)
  }
  respirar(){
    console.log(`${this.nombre} esta respirando`)
  }
  comer(){
    console.log(`${this.nombre} esta comiendo`)
  }
  dormir(){
    console.log(`${this.nombre} esta durmiendo`)
  }
  darLuz(){
    console.log(`${this.nombre} esta dando ah luz`)
  }
  incubarHuevos(){
    console.log(`${this.nombre} esta incubando huevos`)
  }
}
const Pez1 = new Pez("Aletas Pares", "Crenadas", "Mar", "masculino", "Nemo", 10, false,"telolecíticos")
console.log(Pez1)
Pez1.incubarHuevos()

// PAQUIDERMO

class Paquidermo {
  // Atributos ES ALGO PROPIO DEL OBJETO
  constructor(tipoDePiel,tipoDePatas,habitat,sexo,nombre,edad,estaVivo,placenta)
  {
    this.tipoDePiel = tipoDePiel
    this.tipoDePatas = tipoDePatas
    this.habitat = habitat
    this.sexo = sexo
    this.nombre = nombre
    this.edad = edad
    this.estaVivo = estaVivo
    this.placenta = placenta
  }
  
  // METODOS BASICAMENTE SON LAS CARACTERISTICAS DE ALGO OH DE UN OBJETO
  nadar(){
    console.log(`El ${this.nombre} esta nadando`)
  }
  comer(){
    console.log(`El ${this.nombre} esta comiendo`)
  }
  dormir(){
    console.log(`El${this.nombre} esta durmiendo`)
  }
  darLuz(){
    console.log(`El ${this.nombre} esta dando ah luz`)  
  }
  amamantar(){
    console.log(`El ${this.nombre} esta amamantando`)
  }
}

const Paquidermo1 = new Paquidermo("Gruesa","Gruesas","Selva","macho","Cerdo",10,true,false)
console.log(Paquidermo1)
// Utilizando las instancias definidas de la nueva clase
Paquidermo1.amamantar()