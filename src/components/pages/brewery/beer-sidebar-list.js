import React from 'react';

const BeerSidebarList = props => {
    const beerList = props.data.map(beerItem => {
        return(
            <div className="beer-item-thumb" key= {beerItem.id}>
                <div className="beer-photo">
                    <img src={beerItem.thumb_image_url } />
                </div>

                <div>
                    <h1 className="title">{beerItem.name}</h1>
                    <h2>{beerItem.id}</h2>
                </div>
            </div>
        )
    })
        return <div className="beer-sidebar-list-wrapper">{beerList}</div>
}


export default BeerSidebarList;