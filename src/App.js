import React from 'react'
import Row from './Components/Row'
import requests from './requests'
import './Style/App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

function App() {
    return (
        <div className="app">
            <Navbar/>
            <Banner/>
            <Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    );
}

export default App;