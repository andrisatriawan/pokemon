import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Component } from "react/cjs/react.development";
// import { DetailComponent } from "../../Component/DetailComponent";
import "./PokemonDetail.css"
import { Fragment } from "react/cjs/react.production.min";
// import { Pokemon } from "../../Component/Pokemon";

class PokemonDetail extends Component {
  state = {
    PokemonName: "bulbasaur",
    value: 0
  }

  GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }`;

  gqlVariables = {
    name: this.state.PokemonName
  };

  handlePlus = () => {
    document.getElementById("catch").onclick(function () {

      this.setState({
        value: this.state.value + 1
      })
    })
    console.log(this.state.value)
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('You clicked the button.');
  }

  PokemonList = () => {
    const { loading, error, data: { pokemon = [] } = {} } = useQuery(this.GET_POKEMON, {
      variables: this.gqlVariables,
    });

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;




    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="img-thumb">
              <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <p className="pokemon-name" >{pokemon.name.toUpperCase()}</p>
            <button className="btn" id="catch" onClick={this.handleClick} >Catch The Pokemon</button>
            <div className="detail">
              <p className="title">
                Moves
              </p>
              <div className="list-moves">
                <ul>
                  {pokemon.moves.map(move =>
                    <li key={move.move.name}>{move.move.name}</li>
                  )}
                </ul>
              </div>
              <p className="title">
                Types
              </p>
              <div className="list-moves">
                <ul>
                  {pokemon.types.map(type =>
                    <li key={type.type.name}>{type.type.name}</li>
                  )}
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    )

    // return (pokemon.map((pokemon) => pokemon = pokemon.json()));
  };

  render() {
    return (
      <Fragment>
        {/* {console.log(this.PokemonList())} */}

        <this.PokemonList />
      </Fragment>
    )
  }

}

export default PokemonDetail;