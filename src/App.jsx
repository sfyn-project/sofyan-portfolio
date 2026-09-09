import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OrinCaseStudy from './pages/OrinCaseStudy'
import OrinGpsCaseStudy from './pages/OrinGpsCaseStudy'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/orin-operational-platform" element={<OrinCaseStudy />} />
        <Route path="/work/orin-gps-tracking" element={<OrinGpsCaseStudy />} />
      </Routes>
    </>
  )
}
