import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FoodBox = ({ food, onAdd }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddClick = () => {
    onAdd(food, quantity);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                aria-label={`Quantity of ${food.name}`}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAddClick}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

FoodBox.propTypes = {
  food: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default FoodBox;
