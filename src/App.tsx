import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Footer from './components/footer/index'
import Rotas from './routes'
import { store } from './store'
import Cart from './components/cart'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
