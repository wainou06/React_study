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
         {/*
         ★ 라우터에서 여러 경로에서 같은 컴포넌트를 사용시 주의점
         
         최초로 메뉴를 클릭시 MovieCategory 컴포넌트를 렌더링(마운트) 이후 다른 메뉴 클릭시
         MovieCategory 컴포넌트를 재렌더링 하지 X (라우터를 사용한 경우 같은 컴포넌트 사용시
         props가 바뀌어도 재렌더링 X)
         => category props가 바뀔때 재렌더링이 일어나도록 하기 위해서는 key props 사용
         */}
         <Route path="/popular" element={<MovieCategory category="popular" key="popular" />} />
         <Route path="/now_playing" element={<MovieCategory category="now_playing" key="now_playing" />} />
         <Route path="/upcoming" element={<MovieCategory category="upcoming" key="upcoming" />} />
         
         <Route path="/search" element={<SearchResults />} />
         <Route path="/detail/:movidId" element={<Detail />} />
         <Route path="/*" element={<NotFound />} />
      </Routes>
   )
}

export default App
