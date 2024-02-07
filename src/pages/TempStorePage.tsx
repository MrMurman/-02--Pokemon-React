import React, { useEffect, useState } from "react";
import { Pokemon } from "../types";
import { PokeCard } from "../components/PokeCard";

export const TempStorePage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPokeData();
  }, []);

  const url = "https://pokeapi.co/api/v2/pokemon/";
  const getPokeData = () => {
    setIsLoading(true);
    //Generate random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;

    const finalUrl = url + id;

    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="page">
      <div className="container">
        {isLoading || !pokemon ? "Loading" : <PokeCard pokemon={pokemon} />}
        {/* <PokeCard pokemon={pokemon} /> */}
        <button id="btn" onClick={getPokeData}>
          Generate
        </button>
      </div>
    </div>
  );
};
