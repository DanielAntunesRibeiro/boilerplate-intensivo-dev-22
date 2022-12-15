import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<p>Lista de cards</p>} />
        <Route path="/cadastro" element={<p>Cadastro de itens</p>} />
      </Routes>
        
        <div className='content container mb-3 mt-3'>
            <div className="row">
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
            </div>
        </div>

      <Footer />
    </div>
  )
}

export default App
