import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina1 from './pages/Pagina1'
import Pagina2 from './pages/Pagina2'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="app-centralizada">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pagina1 />} />
            <Route path="/pagina2" element={<Pagina2 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
