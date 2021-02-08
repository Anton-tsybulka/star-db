import React, { Component } from 'react'

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context'
import SwapiService from '../../services/SwapiService'
import PeoplePage from '../Pages/PeoplePage'
import PlanetsPage from '../Pages/PlanetsPage'
import StarshipsPage from '../Pages/StarshipsPage'

import './App.css'
export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        hasError: false
    }    

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />            
        }

        return(
            <div>
                <SwapiServiceProvider value={this.swapiService} >
                    <Header />
                    <RandomPlanet />

                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </SwapiServiceProvider>             
            </div>
        )
    }
    
}

