import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroLanding from './components/HeroLanding'
import EventsPage from './pages/EventsPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroLanding />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App
