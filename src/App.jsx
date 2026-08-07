import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import HeroLanding from './components/HeroLanding'
import EventsPage from './pages/EventsPage'
import AboutPage from './pages/AboutPage'
import CorporatePage from './pages/CorporatePage'
import WeddingPage from './pages/WeddingPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import IndustriesPage from './pages/IndustriesPage'
import LocationsPage from './pages/LocationsPage'
import BlogsPage from './pages/BlogsPage'
import CineverseHome from './cineverse/pages/CineverseHome'

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HeroLanding />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/weddings" element={<WeddingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cineverse/*" element={<CineverseHome />} />
      </Routes>
    </Router>
  )
}

export default App
