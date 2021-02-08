import React, { Component } from 'react'

import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import {SwapiServiceProvider} from '../swapi-service-context/swapi-service-context'
import SwapiService from '../../services/SwapiService'
import PeoplePage from '../Pages/PeoplePage'
import PlanetsPage from '../Pages/PlanetsPage'
import StarshipsPage from '../Pages/StarshipsPage'
import StarshipDetails from '../SW-Components/starship-details'
import LoginPage from '../Pages/LoginPage'
import SecretPage from '../Pages/SecretPage'

import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        hasError: false,
        isLoggedIn: false
    }
    
    onLoggin = () => {
        this.setState({isLoggedIn: true})
    }

    render() {
        const {isLoggedIn} = this.state

        if (this.state.hasError) {
            return <ErrorIndicator />            
        }

        return(            
            <div>
                <SwapiServiceProvider value={this.swapiService} >
                    <BrowserRouter>
                        <Header />
                        <RandomPlanet />

                        <Route path='/' render={() => <h2>Welcome to StarDB</h2> } exact />
                        <Route path='/people/:id?' component={PeoplePage} />
                        <Route path='/planets' component={PlanetsPage} />
                        <Route path='/starships' exact component={StarshipsPage} />
                        <Route path='/starships/:id'
                               render={({match}) =>{
                                   const {id} = match.params
                                   return <StarshipDetails itemId={id} />
                               }} />
                        <Route path='/login'
                               render={() => <LoginPage isLoggedIn={isLoggedIn} onLoggin={this.onLoggin} />} />
                        <Route path='/secret'
                               render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                    </BrowserRouter>
                </SwapiServiceProvider>             
            </div>
        )
    }
    
}

