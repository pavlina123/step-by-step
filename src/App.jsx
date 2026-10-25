import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import { Hero, Diagnoses, Gallery, Specialists, Achievements, Pricing, Help, Services, Footer } from './Sections'
import Stepik from './Stepik'
import SpecialistPage from './SpecialistPage'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Diagnoses />
              <Gallery />
              <Specialists />
              <Achievements />
              <Pricing />
              <Help /> {/* Идет сразу после прайса */}
              <Services />
            </>
          } />
          <Route path="/specialist/:id" element={<SpecialistPage />} />
        </Routes>
      </main>
      <Footer />
      <Stepik />
    </div>
  )
}

export default App