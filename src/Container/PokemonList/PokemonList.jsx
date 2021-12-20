import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./PokemonList.css"
import { Pokemon } from "../../Component/Pokemon";
import { Component } from "react/cjs/react.production.min";

class PokemonList extends Component {

  handleNamePokemon = (value) => {
    console.log(value);
  }

  GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
  `;

  gqlVariables = {
    limit: 20,
    offset: 0,
  };

  List = () => {
    const { loading, error, data: { pokemons = [] } = {} } = useQuery(this.GET_POKEMONS, {
      variables: this.gqlVariables,
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log('Data ', pokemons.results)

    return (
      <div className="row">
        {pokemons && pokemons.results.map(pokemon => <Pokemon senderName={(newValue) => this.handleNamePokemon(newValue)} key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }

  render() {
    return (
      <this.List />
    )
  }

};

export default PokemonList;