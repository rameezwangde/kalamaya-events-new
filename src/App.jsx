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
import CineverseAbout from './cineverse/pages/CineverseAbout'
import CineverseFilms from './cineverse/pages/CineverseFilms'
import CineverseProductions from './cineverse/pages/CineverseProductions'
import CineverseFestivals from './cineverse/pages/CineverseFestivals'
import CineverseNews from './cineverse/pages/CineverseNews'
import CineverseCollaborate from './cineverse/pages/CineverseCollaborate'
import CineverseTeam from './cineverse/pages/CineverseTeam'
import CineverseContact from './cineverse/pages/CineverseContact'

// Force HMR reload again
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
        <Route path="/cineverse" element={<CineverseHome />} />
        <Route path="/cineverse/about" element={<CineverseAbout />} />
        <Route path="/cineverse/films" element={<CineverseFilms />} />
        <Route path="/cineverse/productions" element={<CineverseProductions />} />
        <Route path="/cineverse/festivals" element={<CineverseFestivals />} />
        <Route path="/cineverse/news" element={<CineverseNews />} />
        <Route path="/cineverse/collaborate" element={<CineverseCollaborate />} />
        <Route path="/cineverse/team" element={<CineverseTeam />} />
        <Route path="/cineverse/contact" element={<CineverseContact />} />
      </Routes>
    </Router>
  )
}

export default App
