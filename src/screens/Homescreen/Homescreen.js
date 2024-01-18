import React from 'react'
import './Homescreen.css'
import Nav from '../../Nav'
import Banner from './Banner'
import requests from '../../requests'
import Row from '../../Row'

function Homescreen() {
  return (
    <div className='homeScreen'>
        
        <Nav />
        
        <Banner />

        <Row title = 'NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Adventure Movies' fetchUrl={requests.fetchAdventureMovies} />
      <Row title='Animation Movies' fetchUrl={requests.fetchAnimationMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Crime Movies' fetchUrl={requests.fetchCrimeMovies} />
      <Row title='Documentary Movies' fetchUrl={requests.fetchDocumentaryMovies} />
      <Row title='Drama Movies' fetchUrl={requests.fetchDramaMovies} />
      <Row title='Family Movies' fetchUrl={requests.fetchFamilyMovies} />
      <Row title='Fantasy Movies' fetchUrl={requests.fetchFantasyMovies} />
      <Row title='History Movies' fetchUrl={requests.fetchHistoryMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Music Movies' fetchUrl={requests.fetchMusicMovies} />
      <Row title='Mystery Movies' fetchUrl={requests.fetchMysteryMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Science Fiction Movies' fetchUrl={requests.fetchScienceFictionMovies} />
      <Row title='TV Movies' fetchUrl={requests.fetchTVMovie} />
      <Row title='Thriller Movies' fetchUrl={requests.fetchThrillerMovies} />
      <Row title='War Movies' fetchUrl={requests.fetchWarMovies} />
      <Row title='Western Movies' fetchUrl={requests.fetchWesternMovies} />
      <Row title='Action & Adventure TV' fetchUrl={requests.fetchActionAdventureTV} />
      <Row title='Animation TV' fetchUrl={requests.fetchAnimationTV} />
      <Row title='Comedy TV' fetchUrl={requests.fetchComedyTV} />
      <Row title='Crime TV' fetchUrl={requests.fetchCrimeTV} />
      <Row title='Documentary TV' fetchUrl={requests.fetchDocumentaryTV} />
      <Row title='Drama TV' fetchUrl={requests.fetchDramaTV} />
      <Row title='Family TV' fetchUrl={requests.fetchFamilyTV} />
      <Row title='Kids TV' fetchUrl={requests.fetchKidsTV} />
      <Row title='Mystery TV' fetchUrl={requests.fetchMysteryTV} />
      <Row title='News TV' fetchUrl={requests.fetchNewsTV} />
      <Row title='Reality TV' fetchUrl={requests.fetchRealityTV} />
      <Row title='Sci-Fi & Fantasy TV' fetchUrl={requests.fetchSciFiFantasyTV} />
      <Row title='Soap TV' fetchUrl={requests.fetchSoapTV} />
      <Row title='Talk TV' fetchUrl={requests.fetchTalkTV} />
      <Row title='War & Politics TV' fetchUrl={requests.fetchWarPoliticsTV} />
      <Row title='Western TV' fetchUrl={requests.fetchWesternTV} />
    </div>
  )
}

export default Homescreen
