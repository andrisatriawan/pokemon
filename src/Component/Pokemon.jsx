import React from "react";


function handleClick(name) {
  // e.preventDefault();
  this.senderName(name)
  // handleNamePokemon(e)
}

// function handleNamePokemon({ senderName }, newValue) {
//   this.senderName(newValue)
// }

export function Pokemon({ pokemon }) {
  return (
    <div className="col-6" key={pokemon.id}>
      <div className="card" onClick={(e) => handleClick(pokemon.name, e)}>
        <div className="img-thumb">
          <img src={pokemon.image} alt="" />
        </div>
        <p className="product-title" >{pokemon.name.toUpperCase()}</p>
        <p className="product-price"></p>
      </div>
    </div>
  )
}