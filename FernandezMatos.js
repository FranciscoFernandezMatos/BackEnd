class Usuario {
  constructor(nombre, apeliido) {
    this.nombre = nombre;
    this.apeliido = apeliido;
    this.libros = [];
    this.mascotas = [];
  }

  getFullName() {
    console.log(`Nombre Completo: ${this.nombre} ${this.apeliido}`);
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
    console.log(`Listado de Mascotas: ${this.mascotas}`);
  }

  countMascotas() {
    console.log(`Cantidad de Mascotas: ${this.mascotas.length}`);
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    console.log(this.libros.map((libros) => libros.nombre));
  }
}

const usuario = new Usuario("Francisco", "Fernandez Matos");
usuario.getFullName();

usuario.addMascota("Lila");
usuario.addMascota("Manola");
usuario.countMascotas();

usuario.addBook("Blade Runner", "Phillip K. Dick");
usuario.addBook("Un mundo Feliz", "Aldous Huxley");
usuario.getBookNames();
