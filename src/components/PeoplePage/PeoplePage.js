import React, { Component } from 'react'

import ItemList from '../ItemList/ItemList'
import ItemDetails from '../ItemDetails/ItemDetails'
import Row from '../Row/Row'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry'

import './PeoplePage.css'

export default class PersonPage extends Component {

    state = {
        selectedPerson: 5
    }    

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.props.getData}>
                {(i) => `${i.name} (${i.birthYear})`}
            </ItemList>
        )

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedPerson} />
        )

        return(
            <ErrorBoundry>
                <Row left={itemList} right={itemDetails} />
            </ErrorBoundry>
        )
    }
}