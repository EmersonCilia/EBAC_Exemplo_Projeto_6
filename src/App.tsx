import { BrowserRouter } from 'react-router-dom'

import { GlobalCss } from './styles'

import Footer from './components/footer/index'
import Rotas from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
