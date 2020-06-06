import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'

class PokemonCard extends React.Component {

    handleClick = async () => {
        await this.props.catchPokemon(this.props.pokemon.id)
    }

    render() {
        return(
            <Card>
                <Image src={this.props.pokemon.sprites.front} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{this.props.pokemon.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Height: {this.props.pokemon.height} inches</span>
                </Card.Meta>
                <Card.Meta>
                    <span className='date'>Weight: {this.props.pokemon.weight} lbs</span>
                </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                <Button onClick={this.handleClick}>Capture Pokemon</Button>
                </Card.Content>
            </Card>

        )
    }
}

export default PokemonCard