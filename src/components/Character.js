import React from "react";


const Character = (props) => {
  return (
    <div className="character">
        {props.character?.characterImageFull ? (
          <img
            className="character__img"
            src={props.character?.characterImageFull}
            alt="character img"
          />
        ) : (
          <img
            className="character__img"
            src="https://oldestatespa.com/files/oldestatespa/image/no_product.jpg"
            alt="no character img"
          />
        )}

        <div className="character__name">{props.character?.characterName}</div>
    </div>
  );
};

export default Character;
