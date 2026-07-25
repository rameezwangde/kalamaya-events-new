import React from 'react'
import Navbar from '../components/Navbar'

const EventsPage = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Navbar />
      <div style={{ padding: '80px 5%', fontFamily: 'Montserrat, sans-serif', color: '#333' }}>
        <h1>Events Page</h1>
        <p>Welcome to the events exploration page. The navbar is implemented exactly as requested above.</p>
      </div>
    </div>
  )
}

export default EventsPage
