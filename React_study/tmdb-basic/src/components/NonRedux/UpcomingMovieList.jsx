import { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../../api/tmdbApi'

function UpcomingMovieList() {
   const [movies, setMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchMovis = async () => {
         try {
            const movieList = await getUpcomingMovies()
            setMovies(movieList.data.results)
         } catch (error) {
            setError(error.message)
         } finally {
            setLoading(false)
         }
      }

      fetchMovis()
   }, [])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>개봉예정 영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>
                  {movie.title}, {movie.release_date}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default UpcomingMovieList
