import React from 'react'

import ItemList from '../ItemList/ItemList'
import withData from '../HocHelpers/withData'
import withSwapiService from '../HocHelpers/with-swapi-service'
import withChildFunction from '../HocHelpers/with-child-function'
import compose from '../HocHelpers/compose'



const renderName = ({name}) => <span>{name}</span>,
      renderModelAndName = ({name, model}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPeople
    }
}

const mapPlanetMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getAllStarships
    }
}

const PersonList = compose(withSwapiService(mapPersonMethodsToProps),
                           withData,
                           withChildFunction(renderName)
                           )(ItemList);

const PlanetList = compose(withSwapiService(mapPlanetMethodsToProps),
                           withData,
                           withChildFunction(renderName)
                           )(ItemList);

const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps),
                             withData,
                             withChildFunction(renderModelAndName)
                             )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}