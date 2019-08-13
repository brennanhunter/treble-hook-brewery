import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BeerSidebarList = props => {
    const beerList = props.data.map(beerItem => {
        return(
            <div className="beer-item-thumb" key= {beerItem.id}>
                <div className="beer-photo">
                    <img src={beerItem.thumb_image_url } />
                </div>

                <div className="text-content">
                    <h1 className="title">{beerItem.name}</h1>
                    <div className="actions">
                        <a onClick={() => props.handleDeleteClick(beerItem)}><FontAwesomeIcon icon="trash" /></a>
                        <a onClick={() => props.handleEditClick(beerItem)}><FontAwesomeIcon icon="edit" /></a>
                    </div>
                </div>
            </div>
        )
    })
        return <div className="beer-sidebar-list-wrapper">{beerList}</div>
}


export default BeerSidebarList;