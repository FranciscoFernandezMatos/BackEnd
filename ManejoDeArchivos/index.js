const Contenedor = require("./contenedor");

const contenedor = new Contenedor();

contenedor.save({
  author: "Sun Tzu",
  name: "The Art of War",
  price: 100,
});

console.log("Usar getByID");
console.log(contenedor.getByID(3));

console.log("Delete");
