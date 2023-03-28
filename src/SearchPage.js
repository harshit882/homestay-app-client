import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'
function searchPage() {
  return (
    <div className='SearchPage'>
    <div className="searchPage_info">
    <p>62 stays 26 to 30 august</p>
    <h1>Stays nearby</h1>
        <Button variant='outlined'>
            cancellation facility
        </Button>
        <Button variant='outlined'>
            Type of place
        </Button>
        <Button variant='outlined'>
            Price
        </Button>
        <Button variant='outlined'>
            Rooms and beds
        </Button>
        <Button variant='outlined'>
            More Filters
        </Button>
    </div>

    <SearchResult img ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
        location ='Private room in outskirts'
        title ='stays at this spacious Anil house'
        description='1 guest . 1 bedroom .1 bed .1.5 shared bathrooms . Wifi . kitchen . Parking facility'
        star={4.7}
        price ='2000/ night'
        total ='4000/total'
    />

<SearchResult img ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
        location ='Private room in outskirts'
        title ='stays at this spacious Anil house'
        description='1 guest . 1 bedroom .1 bed .1.5 shared bathrooms . Wifi . kitchen . Parking facility'
        star={4.7}
        price ='2000/ night'
        total ='4000/total'
    />

<SearchResult img ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
        location ='Private room in outskirts'
        title ='stays at this spacious Anil house'
        description='1 guest . 1 bedroom .1 bed .1.5 shared bathrooms . Wifi . kitchen . Parking facility'
        star={4.7}
        price ='2000/ night'
        total ='4000/total'
    />

<SearchResult img ="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600"
        location ='Private room in outskirts'
        title ='stays at this spacious Anil house'
        description='1 guest . 1 bedroom .1 bed .1.5 shared bathrooms . Wifi . kitchen . Parking facility'
        star={4.7}
        price ='2000/ night'
        total ='4000/total'
    />
      
    </div>
  )
}

export default searchPage
