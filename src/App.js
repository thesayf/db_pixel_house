import React from 'react';
import './App.css';
import Homepage from './Homepage'
import CapturedPokemon from './CapturedPokemon'
import AboutPokemon from './AboutPokemon'
import {Route} from 'react-router-dom'
import json from './pokemon.json'
import {Link} from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import swal from 'sweetalert'

class App extends React.Component {

    state = {
      pokemon: [],
      caughtPokemonIds: [],
      searchInput: ""
    }

  componentDidMount = async () => {
    await this.setState({pokemon: json.pokemon})
  }

  handlSearch = async (e) => {
    await this.setState({searchInput: e.target.value})
  }

  catchPokemon = async (pokemon) => {
    await this.setState({
      caughtPokemonIds: [...this.state.caughtPokemonIds, pokemon]
    })
    await swal("Good job!", "You've captured a pokemon", "success");
  }

  caughtPokemonFilter = () => {
      return this.state.pokemon.filter(pokemon => {
        return this.state.caughtPokemonIds.includes(pokemon.id)
    })
  }

  fitlerPokemon = () => {
    return this.state.pokemon.filter(pokemon => {
        return pokemon.name.startsWith(this.state.searchInput)
    })
  }

  render() {

    return (
      <React.Fragment>
        <Menu>
        <Menu.Item
          as={ Link }
          to="/"
          name='home'
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={ Link }
          to="/capturedpokemon"
          name='capturedPokemon'
        >
          Captured Pokemon
        </Menu.Item>
        <Menu.Item
          as={ Link }
          to="/aboutPokemon"
          name='AboutPokemon'
        >
          About Pokemon
        </Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>
              <Input onChange={e => this.handlSearch(e)} icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
      </Menu>
        <Route path="/" exact component={() => <Homepage pokemon={this.fitlerPokemon()} catchPokemon={this.catchPokemon}/>}/>
        <Route path="/capturedpokemon" exact component={() => <CapturedPokemon pokemon={this.caughtPokemonFilter()}/>}/>
        <Route path="/aboutPokemon" exact component={() => <AboutPokemon />} />
      </React.Fragment>
    );

  }

}

export default App;
