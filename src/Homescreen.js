import React from 'react'
import './Homescreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './requests'
import Row from './Row'

function Homescreen() {
  return (
    <div className='homeScreen'>
        
        <Nav />
        
        <Banner />

        <Row title = 'NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
    
    </div>
  )
}

export default Homescreen
