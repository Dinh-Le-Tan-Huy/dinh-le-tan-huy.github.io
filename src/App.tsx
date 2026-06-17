import './App.css'
import Header from './View/Components/Header/Header'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Contact from './View/layout/Contact/Contact'
import { Home } from './View/layout/Home/Home'
import ScrollToHash from './View/Components/ScrollToHash/ScrollToHash'
import Footer from './View/Components/Footer/Footer'
import About from './View/layout/About/About'

function App() {
  return (
    <HashRouter>
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh', backgroundColor: '#080b14' }}>
        <Header />
        <main>
          {/* Scroll offset compensates for fixed Header */}
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>

  )
}

export default App
