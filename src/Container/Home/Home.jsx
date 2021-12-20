import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import React from "react";
import { Fragment } from "react/cjs/react.development";
// import PokemonDetail from "../PokemonDetail/PokemonDetail";
import PokemonList from "../PokemonList/PokemonList";
import './Home.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.graphcdn.app/',
  cache: new InMemoryCache()
})

export function Home() {
  return (
    <ApolloProvider client={client}>
      <main>
        <Fragment>
          <div >
            <div className="header">
              <div className="troley">
                <img src="https://svgsilh.com/svg/294547.svg" alt="" />
                <div className="count">3</div>
              </div>
            </div>
            <div className="row">
              {
                <PokemonList />
                // <PokemonDetail />
              }
            </div>
          </div>
        </Fragment>
      </main>
    </ApolloProvider>
  )
}

