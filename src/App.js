import React from 'react';
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/10/10/e1d38d22a01a5f11619e141e089f66cb1.jpg",
    rating: 5
  },
  {
    id:2,
    name: "samgiopsal",
    image:"https://w.namu.la/s/768f1fdb6b65fc9fa7b6e2842523512f1a29bd510e63fe014b150f0ef821824d677696bd7acd360119e14de9bba6774a4c2ed567e81df279513767992f151ef873f335a872dcba470c9025e883c422799f7e467d8d74edb3e9f81bed7722b23dc120fb48348a57ef4fc4068d7f5239a6",
    rating: 4.8,
  },
  {
    id:3,
    name: "chukumi",
    image:"https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg",
    rating: 4.5

  },
]
function Food({name, picture,rating}){ 
  //            props.fav를 사용하는 것과 동일.
  return (
    <div>
      <h1> I like {name}</h1>
  <h4>{rating}/5.0</h4>
    <img src = {picture} alt={name}></img>

    </div>
  )
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
} 
function App() {
  return <div > 
    <h1>Food</h1>
    {foodIlike.map(dish => 
    <Food 
    name={dish.name} 
    picture={dish.image} 
    key={dish.id}
    rating={dish.rating}/>)}
    </div>
  
}

export default App;
