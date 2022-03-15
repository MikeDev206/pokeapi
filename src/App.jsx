import React, { useEffect, useState } from "react";
import Pokedex from "./lib/Pokedex";
import PokemonBadge from "./components/PokemonBadge";
import "./styles/index.scss";

function App() {

  const [ pokemons, setPokemons ] = useState([])

  useEffect(() => {
    Pokedex.getPokemonsList( { limit: 150 } )
    .then((pokedexResponse)=> {
      setPokemons(pokedexResponse.results)
    } )
  },[])

	return (
		<>
			<nav>
				<img
					src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
					alt="logo-pokeapi"
					className="logo"
				/>
			</nav>
			<main>
				<section className="results">
					{pokemons.map((pokemon) => {
            return (
               <PokemonBadge 
                name={pokemon.name}
                url={pokemon.url} 
                key={pokemon.name}
               />
            )
					  })
          }
				</section>
        <footer>
          <div> Anterior </div>
          <div> Siguiente </div>
        </footer>
			</main>
		</>
	);
}

export default App;
