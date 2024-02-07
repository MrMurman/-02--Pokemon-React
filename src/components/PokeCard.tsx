import React, { useEffect, useState } from "react"
import { typeColor } from "../consts"
import { Pokemon, PokemonType } from "../types"
import { getPokeName } from "../helper"

export interface PokeCardProps {
  pokemon: Pokemon;
}

export const PokeCard = ({ pokemon }: PokeCardProps) => {
  const hp = pokemon.stats[0].base_stat ?? 66
  const imgSrc = pokemon.sprites.other.dream_world.front_default
  const pokeName = pokemon.name
  const statAttack = pokemon.stats[1].base_stat
  const statDefense = pokemon.stats[2].base_stat
  const statSpeed = pokemon.stats[5].base_stat
  const types = pokemon.types
  const themeColor = types ? typeColor[types[0].type.name] : "#eee"

  

  return (
    <div>
      <div
        id="card"
        style={{
          background: `radial-gradient(circle at 50% 0, ${themeColor} 36%, #ffffff 36%)`,
        }}
      >
        <p className="hp">
          <span>HP</span>
          {hp}
        </p>
        <img src={imgSrc} alt="pokemon" />
        <h2 className="poke-name">{getPokeName(pokeName)}</h2>
        <div className="types">
          {types.map((item) => (
            <span style={{ background: `${themeColor}` }} key={item.type.name}>
              {item.type.name}
            </span>
          ))}
        </div>
        <div className="stats">
          <div>
            <h3>{statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>{statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
