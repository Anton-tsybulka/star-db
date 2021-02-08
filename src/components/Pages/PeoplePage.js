import React, { Component } from 'react'
import Row from '../Row/Row'
import  {PersonList}  from '../SW-Components/item-list'
import PersonDetails from '../SW-Components/person-details'

export default class PeoplePage extends Component {
    
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const {selectedItem} = this.state

        return(
            <Row left={<PersonList onItemSelected={this.onItemSelected} />}
                 right={<PersonDetails itemId={selectedItem} />} />
        )
    }
}