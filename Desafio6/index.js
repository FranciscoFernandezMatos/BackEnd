import express from "express";
import fs from "fs";

const app = express();

let filepath = "./productos.txt";

const port = 8080;

const main = () => {
  app.get("/productos", (res) => {
    const productos = fs.readFileSync(filepath, "utf-8");
    const array = JSON.parse(productos);
    res.json([
      {
        items: array,
        cantidad: array.length,
      },
    ]);
  });

  app.get("/productoRandom", (res) => {
    const productos = fs.readFileSync(filepath, "utf-8");
    const array = JSON.parse(productos);
    res.json([
      {
        item: array[Math.floor(Math.random() * array.length)],
      },
    ]);
  });

  const server = app.listen(port, () => {
    console.log(
      "El servidor esta corriendo en el puerto: " + server.address().port
    );
  });
  server.on("error", (err) => console.log("Error message: " + err));
};

main();
