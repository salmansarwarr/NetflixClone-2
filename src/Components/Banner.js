import React, { useEffect, useState } from 'react'
import instance from '../axios'
import requests from '../requests'
import '../Style/Banner.scss'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await instance.get(requests.fetchNetflixOrignals)
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ])
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }

    if(movie.backdrop_path == null) {
        return null
    }
    else {
        return(
        <header 
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                backgroundPosition: 'center center'
            }}    
        >
            <div className='banner_content'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <a href="https://netflix.com" target="_blank" rel="noreferrer">
                        <button className='banner_button'>Play</button>
                    </a>
                    <a href="https://netflix.com" target="_blank" rel="noreferrer">
                        <button className='banner_button'>My List</button>
                    </a>
                </div>
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </div>

            <div className='banner_fadeBottom'></div>
        </header>
        )
    }
}

export default Banner