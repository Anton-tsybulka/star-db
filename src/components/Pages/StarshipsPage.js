import React, { Component } from 'react'
import Row from '../Row/Row'
import { StarshipList } from '../SW-Components/item-list'
import StarshipDetails from '../SW-Components/starship-details'

export default class StarshipsPage extends Component {
    
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state

        return(
            <Row left={<StarshipList onItemSelected={this.onItemSelected} />}
                 right={<StarshipDetails itemId={selectedItem} />} />
        )
    }
}