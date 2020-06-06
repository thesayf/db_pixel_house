import React from 'react'
import PokemonCollection from './components/PokemonCollection'

class CapturedPokemon extends React.Component {
    
    render() {
        return (
            <PokemonCollection pokemon={this.props.pokemon}/>
        )
    }

}
export default CapturedPokemon;