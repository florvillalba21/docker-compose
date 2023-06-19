import axios from "axios";
import { useEffect, useState } from "react";
import { ModalEdit } from "./ModalEdit";
import { ModalDelete } from "./ModalDelete";
import { ModalNewproduct } from "./ModalNewProduct";
import { ProductsContext } from "../context/ProductsContext";

export const Listproducts = () => {
  const url = "http://localhost:3000/getProducts";
  const [data, setData] = useState([]);
  const [idEdit, setIdEdit] = useState(null);
  const [idDelete, setIdDelete] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.data.length > 0) {
          setData(res.data);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ProductsContext.Provider value={{ data, setData }}>
        <ModalNewproduct />
        <ModalEdit id={idEdit} />
        <ModalDelete id={idDelete} />
      </ProductsContext.Provider>

      <h3>PRODUCTOS</h3>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((value, index) => (
              <tr key={index}>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => setIdEdit(value.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#modalEditProduct"
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setIdDelete(value.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#modalDeleteProduct"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div style={{ margin: "0 auto" }}>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modalNewProduct"
        >
          Agregar un nuevo producto
        </button>
      </div>
    </>
  );
};
