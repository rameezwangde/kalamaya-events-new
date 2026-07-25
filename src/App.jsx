import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HeroLanding from './components/HeroLanding'
import EventsPage from './pages/EventsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroLanding />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  )
}

export default App
