import axios from "axios";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const ModalDelete = ({ id }) => {
  const {data, setData} = useContext(ProductsContext);
  const url = `http://localhost:3000/deleteProduct/${id}`;
  const saved = () => {
    axios
      .delete(url)
      .then((res) => {
        setData((prevProducts) => prevProducts.filter((product) => product.id !== id))
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div
        className="modal fade"
        id="modalDeleteProduct"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                ¿Está seguro que desa eliminar este producto?
              </h1>
            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={saved}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
