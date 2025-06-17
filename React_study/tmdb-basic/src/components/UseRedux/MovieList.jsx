import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movieSlice'
import { Link } from 'react-router-dom'

function MovieList() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      // fetchMovies() 액션 생성자 함수 실행
      dispatch(fetchMovies())
   }, [dispatch]) // useEffect안에서 dispatch 사용시 무조건 지정

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>인기영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <Link to={`/detail/${movie.id}`} key={movie.id}>
                  <li>{movie.title}</li>
               </Link>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
