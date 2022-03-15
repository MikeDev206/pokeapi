import React, { useState, useEffect } from "react";
import Pokedex from "../lib/Pokedex";

export default function PokemonBadge({ name = "", url = "" }) {
	const [pokemon, setPokemon] = useState({});
	const [image, setImage] = useState(
		"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
	);

	useEffect(() => {
		Pokedex.getPokemonByName(name).then((pokedexResponse) => {
			setPokemon(pokemon);
			setImage(pokedexResponse.sprites.front_default);
		});
	});

	return (
		<article className="pokemon-card">
			<header>
				<img
					src={image}
					alt="pokeball"
				/>
			</header>
			<footer>{name}</footer>
		</article>
	);
}
