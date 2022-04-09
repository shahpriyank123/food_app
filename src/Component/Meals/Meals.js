import React from 'react';
import AvailaibleMeals from './AvailaibleMeals';
import MealsSummary from './MealsSummary';

const Meals = () => {
  console.log("Meals");
  return (<div>
      <MealsSummary/>
      <AvailaibleMeals/>

  </div>);
};

export default Meals;
