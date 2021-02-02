import React, { Component } from 'react'

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import SwapiService from '../../services/SwapiService'
import Row from '../Row/Row'
import ItemDetails, {Record} from '../ItemDetails/ItemDetails'

import './App.css'

//<PeoplePage getData={this.swapiService.getAllPeople} renderItem={(item) => item.name} /> 

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        hasError: false
    }    

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />            
        }

        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService
        const personDetails = (<ItemDetails itemId={11}
                                            getData={getPerson}
                                            getImageUrl={getPersonImage}>

                                    <Record field='gender' label='Gender' />
                                    <Record field='eyeColor' label='Eye Color' />
                                </ItemDetails>)
        const starshipDetails = (<ItemDetails itemId={5}
                                            getData={getStarship}
                                            getImageUrl={getStarshipImage}>

                                    <Record field='model' label='Model' />
                                    <Record field='length' label='Length' />
                                    <Record field='costInCredits' label='Cost' />
                                </ItemDetails>)

        return(
            <div>
                <Header />
                <RandomPlanet />
                <Row left={personDetails} 
                     right={starshipDetails} />                
            </div>
        )
    }
    
}

