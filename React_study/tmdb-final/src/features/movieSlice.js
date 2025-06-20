import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovieCredits, getMovieDetails, getMovies } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   // category: 'popular', page: 1
   const response = await getMovies(category, page)
   return response.data.results
})

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

export const fetchMovieCredits = createAsyncThunk('movies/fetchMovieCredits', async (movieId) => {
   const response = await getMovieCredits(movieId)
   console.log(response)
   return response.data
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [], // 현재상영 or 개봉예정 or 인기영화 목록
      movieDetails: null,
      movieCredits: null,
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false

            // action.meta.arg에서는 fetch 함수에서 매개변수로 받아온 값을 가져올 수 있음
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               // 페이지가 2페이지 이상일때는 기존 데이터 + 새로운 데이터 state로 업데이트
               state.movies = [...state.movies, ...action.payload]
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieCredits.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieCredits.fulfilled, (state, action) => {
            state.loading = false
            state.movieCredits = action.payload
         })
         .addCase(fetchMovieCredits.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
