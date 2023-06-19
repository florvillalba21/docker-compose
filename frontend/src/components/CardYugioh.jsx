import React, { useContext } from "react";
import { CardContext } from "../context/CardsContext";

export const CardYugioh = () => {
  //se incluye el contexto de las cartas para utilizarla
  const { cards, setCards } = useContext(CardContext);

  //retorna una card por cada elemento de la lista de cartas
  return (
    <div className="row justify-content-md-center">
      {cards.map((value, index) => {
        return (
          <div
            key={index}
            className="card col-md-auto"
            style={{ width: "18rem"}}
          >
            <img src={value.card_images[0].image_url_cropped} />
            <div className="card-body">
              <div>
                <h5 className="card-title">{value.name}</h5>
                <b className="card-text">[{value.race}]</b>
                <p className="card-text">{value.typeCard}</p>
                <b className="card-text">
                  ATK/{value.atk} DEF/{value.def}
                </b>
              </div>

              <div>
                {/* al presionar el boton de eliminar, lo que se setea es un nuevo array sin el elemento que coincida con el index, el cual corresponde a cada elemento de la lista de cartas */}
                <button
                  onClick={() => setCards(() => cards.toSpliced(index, 1))}
                  className="btn btn-outline"
                >
                  Eliminar de la lista
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
