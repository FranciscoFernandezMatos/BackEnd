const fs = require("fs");

class Contenedor {
  constructor(archivo) {
    console.log("Iniciando contenedor");
    this.archivo = archivo;
    this.data = [];

    try {
      this.read();
    } catch (err) {
      console.log("No se encontro el Archivo");
      console.log("Creando uno nuevo");
      this.write();
    }
  }

  write() {
    fs.promises
      .writeFile(this.archivo, JSON.stringify(this.data))
      .then(() => {
        console.log("Informacion guardada");
      })
      .catch((err) => console.error(err));
  }

  read() {
    fs.promises
      .readFile(this.archivo)
      .then((data) => {
        this.data = JSON.parse(data);
        console.log("Informacion cargada");
      })
      .catch((err) => console.error(err));
  }

  getLastID() {
    const l = this.data.length;

    if (l < 1) return 0;

    return this.data[this.data.length - 1].id;
  }

  save(obj) {
    const id = this.getLastID();
    this.data.push({
      ...obj,
      ...{ id: id + 1 },
    });
    this.write();
  }

  getById() {
    return this.data.find((p) => p.id == id);
  }

  getAll() {
    return this.data;
  }

  deleteById(id) {
    const index = this.data.findIndex((p) => p.id == id);
    this.data.splice(index, 1);
    this.write();
  }

  deleteAll() {
    this.data = [];

    this.write();
  }
}

module.exports = Contenedor;
