import axios from "axios";
import { useEffect, useState } from "react";

export const ModalEdit = ({ id }) => {
  const url = `http://localhost:3000/editProduct/${id}`;
  const [data, setData] = useState({
    name: "",
    price: null,
  });

  const savedChanges = () => {
    axios
      .put(url, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleinput = (event) => {
    setData({
      ...data,
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
                  value={data.name}
                />
              </div>
              <div>
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={handleinput}
                  name="price"
                  value={data.price}
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
