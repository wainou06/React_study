// 메인 페이지
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>메인 페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default Home
