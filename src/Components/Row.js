import React, { useEffect, useState } from 'react'
import instance from '../axios'
import '../Style/Row.scss'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const baseUrl = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await instance.get(fetchUrl)
            setMovies(response.data.results)
        }
        fetchData()
    }, [fetchUrl])

    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerUrl("")
        }
        else {
            movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row-posters'>
                {
                    movies.map((movie, i) => {
                        if(movie.backdrop_path == null || movie.poster_path == null) {
                            return null
                        }

                        return(
                            <img 
                                onClick={() => handleClick(movie)}
                                className={isLargeRow ? 'row_posterLarge' : 'row_poster'}
                                key={i} 
                                src={isLargeRow ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                    })
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row