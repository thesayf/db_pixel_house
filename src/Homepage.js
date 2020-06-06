import React from 'react'
import PokemonCollection from './components/PokemonCollection'

class Homepage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <PokemonCollection pokemon={this.props.pokemon} catchPokemon={this.props.catchPokemon}/>
            </React.Fragment>
        )
    }

}
export default Homepage;