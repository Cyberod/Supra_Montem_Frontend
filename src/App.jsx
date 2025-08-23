import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import PracticeArea from './pages/PracticeArea'
import ArbitrationADR from './pages/ArbitrationADR'
import Blog from './pages/Blog';
import Contact from './pages/Contact';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice-areas" element={<PracticeArea />} />
          <Route path="/practice-areas/arbitration-adr" element={<ArbitrationADR />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}
