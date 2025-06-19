import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import MovieCategory from './pages/MovieCategory'
import NotFound from './pages/NotFound'
import SearchResults from './pages/SearchResults'

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/popular" element={<MovieCategory />} />
         <Route path="/now_playing" element={<MovieCategory />} />
         <Route path="/upcoming" element={<MovieCategory />} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/detail/:movidId" element={<Detail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
