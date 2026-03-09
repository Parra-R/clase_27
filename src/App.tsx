import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { Contact } from './Pages/Contact/Contact'

function App() {
  return (
    <BrowserRouter>

      {/* 1. La Navbar (Siempre visible) */}
      <nav className="p-4 bg-indigo-600 text-white flex gap-4 shadow-lg">
        <Link to="/" className="hover:underline font-bold">Inicio</Link>
        <Link to="/contacto" className="hover:underline font-bold">Contacto</Link>
      </nav>

      {/* 2. El Área de Contenido (Aquí cambian los componentes) */}
      <div className="p-10">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        /* 404 - Si no encuentra la ruta */
        <Route path='*' element={<h2 className='text-red-500'>404 - Not Found</h2>}></Route>
        </Routes>
      </div>

    </BrowserRouter>
  )
}


export default App
