import { connection } from "../db/connectionDB.js";

export const getProducts = (req, res) => {
  connection.query("SELECT * FROM products", (error, results, fields) => {
    if (error) {
      console.error("Error al obtener los productos:", error);
      res.status(500).json({ error: "Error al obtener los productos" });
    } else {
      res.json(results);
    }
  });
};

export const newProduct = (req, res) => {
  const { name, price } = req.body;

  connection.query(
    `INSERT INTO products (name, price) VALUES (?, ?)`,
    [name, price],
    (error, results, fields) => {
      if (error) {
        console.error("Error al crear el producto:", error);
        res.status(500).json({ error: "Error al crear el producto" });
      } else {
        res.json({ message: "Producto creado exitosamente" });
        io.emit("productCreated", { name, price });
      }
    }
  );
};


export const editProduct = (req, res) => {
  const productId = req.params.id;
  const { name, price } = req.body;

  connection.query(
    `UPDATE products SET name = ?, price = ? WHERE id = ?`,
    [name, price, productId],
    (error, results, fields) => {
      if (error) {
        console.error("Error al editar el producto:", error);
        res.status(500).json({ error: "Error al editar el producto" });
      } else {
        res.json({ message: "Producto editado exitosamente" });
      }
    }
  );
};

export const deleteProduct = (req, res) => {
  const productId = req.params.id;

  connection.query(
    `DELETE FROM products WHERE id = ?`,
    [productId],
    (error, results, fields) => {
      if (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ error: "Error al eliminar el producto" });
      } else {
        res.json({ message: "Producto eliminado exitosamente" });
      }
    }
  );
};
