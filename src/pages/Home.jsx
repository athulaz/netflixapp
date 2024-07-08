import React from 'react'
import Row from '../components/Row'
import requests from '../requestApi/request'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'



function Home() {
  return (
    <div>
      <Navbar>     </Navbar>
      <Banner fetchUrl={requests.fetchTrending}></Banner>
      <Row change={true} title={'Trending'} fetchUrl={requests.fetchTrending}></Row>
      <Row title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated}></Row>
      <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies}></Row>
      <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title={'Romance MovieS'} fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title={'Documentaries'} fetchUrl={requests.fetchDocumentaries}></Row>
     
    </div>
  )
}

export default Home
