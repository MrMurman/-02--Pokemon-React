import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { PokeCard } from "../PokeCard/PokeCard";
import { Loader } from "./Loader";

export const CardContainer = () => {
  const [pokemon, setPokemon] = useState();
  const [pokeImage, setPokeImage] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPokeData();
  }, []);

  function getPokeData() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const id = Math.floor(Math.random() * 150) + 1;
    const finalURL = url + id;

    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Pokemon data inside fetch", data);
        setPokemon({
          hp: data.stats[0].base_stat,
          //   imgSrc: data.sprites.other.dream_world.front_default,
          name: data.name[0].toUpperCase() + data.name.slice(1),
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
        });
        setTimeout(() => {
          setPokeImage(data.sprites.other.dream_world.front_default);
          setLoading(false);
        }, 2000);
      });
  }

  return (
    <div className={styles.container}>
      {/* {loading && <Loader />} */}
      <PokeCard pokemon={pokemon} imageSrc={pokeImage} isLoading={loading} />
      <button
        onClick={() => {
          setLoading(true);
          getPokeData();
          console.log("Pokemon inside button", pokemon);
        }}
        className={styles.btn}
      >
        Generate
      </button>
    </div>
  );
};
