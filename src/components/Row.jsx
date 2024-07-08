import React, { useEffect, useState } from 'react'
import instance from '../requestApi/baseUrl'
import './Row.css'

function Row({ fetchUrl, title,change }) {    // {fetchUrl} - its a destructuring method of props

  const [movie, setMovies] = useState([])

  const base_url = "https://image.tmdb.org/t/p/original/"




  const fetchMovies = async () => {
    const out = await instance.get(fetchUrl)
    setMovies(out.data.results);
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  // console.log(movie);


  return (
    <div className='row'>
      <h1>{title}</h1>
      {/* <h1>{fetchUrl}</h1> */}

      <div className='movies'>
        {
          movie.length > 0 ?
            (
              movie.map(i =>
                <img className='movie' src={`${base_url}${change?i.poster_path:i.backdrop_path}`} alt="" />
              )
            )
            :
            <h4> Loading...</h4>


        }


      </div>





    </div>
  )
}

export default Row




