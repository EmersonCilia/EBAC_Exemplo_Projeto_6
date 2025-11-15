import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Menu from './pages/Menus'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu/:id" element={<Menu />} />
  </Routes>
)

export default Rotas
