import React, { useEffect, useState } from 'react'
import instance from '../requestApi/baseUrl'
import './Banner.css'


function Banner({fetchUrl}) {

 const [movie, setMovie]=useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"

    const fetchMovie =async () => {
      const result= await instance.get(fetchUrl)
      setMovie(result.data.results
        [Math.floor([Math.random()*result.data.results.length])]);
      }

      useEffect(() => {
        fetchMovie()
      }, [])



  return (
    <div className='banner' 
    style={{backgroundImage:`url(${base_url}${movie.backdrop_path})`}}>
        <div> 
        <h1>{movie.title?movie.title:movie.name}</h1>
        <p>{movie.overview}</p>

        </div>
 
    </div>
  )
}

export default Banner





