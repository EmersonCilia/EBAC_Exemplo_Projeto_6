import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Restaurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
  </Routes>
)

export default Rotas
