import axios from "axios";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const ModalNewproduct = () => {
  const {data, setData} = useContext(ProductsContext);
  const url = "http://localhost:3000/newProduct";
  const [product, setProduct] = useState({
    name: "",
    price: null,
  });

  const addProduct = () => {
    console.log(product)
    axios
      .post(url, product)
      .then((res) => {

        console.log(res);
        setData((prevProducts) => [...prevProducts, product]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleinput = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        className="modal fade"
        id="modalNewProduct"
        product-bs-backdrop="static"
        product-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Agregar un nuevo producto
              </h1>
              <button
                type="button"
                className="btn-close"
                product-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleinput}
                  value={product.name}
                />
              </div>
              <div>
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleinput}
                  name="price"
                  value={product.price}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                product-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary"  onClick={addProduct}>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
