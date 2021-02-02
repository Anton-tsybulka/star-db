import React from 'react'

import SwapiService from '../../services/SwapiService'
import {withData} from '../HocHelpers/WithData'

import './ItemList.css'

 const ItemList = (props) => {     
   
    const {data, onItemSelected, children: renderLabel} = props,
           items = data.map((item) => {
                const {id} = item,
                label = renderLabel(item)
    
                return(
                    <li className="list-group-item"
                        key={id}
                        onClick={() => onItemSelected(id)}>
                        {label}
                    </li>
                )
            })
        
    return(
        <ul className="item-list list-group">
             {items}
        </ul>
    )
}

const {getAllPeople} = new SwapiService()

export default withData(ItemList, getAllPeople)



