import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodsData from './resources/FoodData';
import './App.css';

const App = () => {
  const [foods, setFoods] = useState(foodsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    const filteredFoods = foodsData.filter(food =>
      food.name.toLowerCase().includes(term.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  const handleAddFood = (food, quantity) => {
    setSelectedFoods(prevFoods => {
      const existingFood = prevFoods.find(f => f.id === food.id);
      if (existingFood) {
        return prevFoods.map(f =>
          f.id === food.id ? { ...f, quantity: f.quantity + quantity } : f
        );
      }
      return [...prevFoods, { ...food, quantity }];
    });
  };

  const handleResetFood = (foodId) => {
    setSelectedFoods(prevFoods => prevFoods.filter(food => food.id !== foodId));
  };

  return (
    <div className="app">
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="container">
        <div className="food-list">
          {foods.map(food => (
            <FoodBox key={food.id} food={food} onAdd={handleAddFood} />
          ))}
        </div>
        <div className="selected-foods">
          <h2 className="subtitle">Selected Foods</h2>
          <ul>
            {selectedFoods.map(food => (
              <li key={food.id} className="added-item">
                {food.quantity} {food.name} = {food.quantity * food.cal} cal
                <button 
                  className="button is-small is-danger" 
                  onClick={() => handleResetFood(food.id)}
                >
                  Reset
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
