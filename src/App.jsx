import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroLanding from './components/HeroLanding'
import EventsPage from './pages/EventsPage'
import AboutPage from './pages/AboutPage'
import CorporatePage from './pages/CorporatePage'
import WeddingPage from './pages/WeddingPage'
import PortfolioPage from './pages/PortfolioPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroLanding />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  )
}

export default App
