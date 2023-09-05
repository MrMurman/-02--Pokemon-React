import React, { useState } from "react";
import styles from "./styles.module.css";
import Pokemon from "./demo-image.svg";
import { Loader } from "../CardContainer/Loader";

// export const PokeCard = (props) => {
//     const {pokemon, imageSrc} = props
export const PokeCard = ({ pokemon, imageSrc, loading }) => {
  let { name, hp, attack, defense, speed } = pokemon ?? {};
  console.log("pokemon inside card", pokemon);
  //   const [loading, setLoading] = useState(true);

  return (
    <div className={styles.card}>
      <p className={styles.hp}>
        <span>HP</span>
        {hp}
      </p>
      {loading ? <Loader /> : <img src={imageSrc} alt="selected pokemon" />}
      <h2 className={styles.pokeName}>{name}</h2>
      <div className={styles.types}>
        <span>type 1</span>
        <span>type 2</span>
      </div>
      <div className={styles.stats}>
        <div>
          <h3>{attack}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>{defense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>{speed}</h3>
          <p>Speed</p>
        </div>
      </div>
    </div>
  );
};
