import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
const [recipes,setRecipes]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('banana');

  useEffect(()=>{
    getRecipes();
    },[query]); 
  // bir kere çalışması için ikinci argüman olarak boş array [] eklendi. 
  //boş array içine yazılan değişken değişince useEffect çalışır --[query]

const getRecipes=async ()=>{
  const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`)
 const data= await response.json()
    console.log(data)
    setRecipes(data.hits)
  }

const updateSearch = (e) => {
setSearch(e.target.value);
}

const getSearch =(e) =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
  return (
 <div>
<form onSubmit={getSearch} className="search-form" >
  <input type="text" className="search-bar" value={search} onChange={updateSearch} />
  <button type="submit" className="search-button">Search</button>
</form>
<div className='recipes'>
{recipes.map(recipe => (
  <Recipe 
  key={recipe.recipe.label}
  title={recipe.recipe.label} 
  calories={recipe.recipe.calories} 
  image={recipe.recipe.image} 
  ingredients={recipe.recipe.ingredients}
  />
))}
</div>
 </div>
  );
}

export default App;
