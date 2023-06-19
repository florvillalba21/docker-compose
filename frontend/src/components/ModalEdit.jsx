import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const ModalEdit = ({ id }) => {
  const { data, setData } = useContext(ProductsContext);
  const url = `http://localhost:3000/editProduct/${id}`;
  const [prod, setProd] = useState({
    name: "",
    price: null,
  });

  useEffect(() => {
    const product = data.find((product) => product.id == id);
    product && 
    setProd({ name: product.name, price: product.price })
    ;
  }, [id]);
  const savedChanges = () => {
    axios
      .put(url, prod)
      .then((res) => {
        setData((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, ...prod } : product
          )
        );
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleinput = (event) => {
    setProd({
      ...prod,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalEditProduct"
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
                Editar producto
              </h1>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleinput}
                  value={prod.name}
                />
              </div>
              <div>
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleinput}
                  name="price"
                  value={prod.price}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={savedChanges}
                data-bs-dismiss="modal"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
