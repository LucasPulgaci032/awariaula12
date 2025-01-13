

import  List  from '../../Components/List';
import { useEffect, useState } from 'react';
import './home.css';


const Home = () => {
   
    const[pokemons, setPokemons] = useState([]);
    
    const getPokemonsInfo = async (data) => {
     const promises = data.map((pokemon) => {
         return fetch(pokemon.url).then((response) =>
     response.json());
     });
     Promise.all(promises).then((results) => {
         setPokemons(results);
     });
    };
    
 
     const getPokemons = async () =>{  
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=200').then((response) => response.json())
        .then((data) => {
            getPokemonsInfo(data.results);
        
         });
 
     };
        
       
    
     useEffect(() => {
        getPokemons(); 
      },[]);
         return (
        
        < div className='container'>
            <h1>Lista de Pokemons</h1>
           
            <List items={pokemons}  />
           
        </div>
  );
};

export default Home;
