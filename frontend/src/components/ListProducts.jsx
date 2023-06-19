import axios from "axios";
import io from 'socket.io-client';
import { useEffect, useState } from "react";
import { ModalEdit } from "./ModalEdit";
import { ModalDelete } from "./ModalDelete";
import { ModalNewproduct } from "./ModalNewProduct";

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
      <ModalNewproduct />
      <ModalEdit id={idEdit} />
      <ModalDelete id={idDelete} />

      <div style={{ width: "60%", margin: "0 auto" }}>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modalNewProduct"
        >
          Agregar un nuevo producto
        </button>
      </div>
      <table
        className="table table-dark table-striped"
        style={{ width: "80%", margin: "0 auto", marginTop: "50px" }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((value, index) => (
              <tr key={index}>
                <th>{value.id}</th>
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
    </>
  );
};
