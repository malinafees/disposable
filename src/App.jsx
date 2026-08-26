import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">react-app-base CFP12177-BUILD-RECOVERED</span>
        <nav>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/gallery" replace />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/gallery" replace />} />
        </Routes>
      </main>

      <footer className="footer muted">
        Test base for Cloudflare compression &amp; Scrape Shield.
      </footer>
    </div>
  )
}

export default App
