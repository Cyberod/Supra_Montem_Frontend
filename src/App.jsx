import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsappFloat from './components/WhatsappFloat';
import Home from './pages/Home'
import PracticeArea from './pages/PracticeArea'

import ArbitrationADR from './pages/ArbitrationADR'
import CapitalMarkets from './pages/CapitalMarkets'; 
import Competition from './pages/Competition';
import ComplianceESG from './pages/ComplianceESG';
import Corporate from './pages/Corporate';
import DataProtection from './pages/DataProtection';
import Derivatives from './pages/Derivatives';
import Employment from './pages/Employment';
import Environmental from './pages/Environmental';
import ForeignInvestments from './pages/ForeignInvestments';
import IntellectualProperty from './pages/IntellectualProperty';
import Insolvency from './pages/Insolvency';
import Investigations from './pages/Investigations';
import Lendings from './pages/Lendings';
import Litigations from './pages/Litigations';
import MergersAndAcquisitions from './pages/MergersAndAcquisitions';
import Tax from './pages/Tax';
import WhiteCollar from './pages/WhiteCollar';

import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';



export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this line */}
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice-areas" element={<PracticeArea />} />
          <Route path="/practice-areas/arbitration-adr" element={<ArbitrationADR />} />
          
          <Route path="/practice-areas/capital-markets" element={<CapitalMarkets />} /> 
          <Route path="/practice-areas/competition" element={<Competition />} /> 
          <Route path="/practice-areas/compliance-esg" element={<ComplianceESG />} /> 
          <Route path="/practice-areas/corporate" element={<Corporate />} /> 
          <Route path="/practice-areas/data-protection" element={<DataProtection />} /> 
          <Route path="/practice-areas/derivatives" element={<Derivatives />} /> 
          <Route path="/practice-areas/employment" element={<Employment/>} /> 
          <Route path="/practice-areas/environmental" element={<Environmental/>} /> 
          <Route path="/practice-areas/foreign-investments" element={<ForeignInvestments/>} />
          <Route path="/practice-areas/intellectual-property" element={<IntellectualProperty/>} />
          <Route path="/practice-areas/insolvency" element={<Insolvency/>} />
          <Route path="/practice-areas/investigations" element={<Investigations/>} />
          <Route path="/practice-areas/lendings" element={<Lendings/>} />
          <Route path="/practice-areas/litigations" element={<Litigations/>} />
          <Route path="/practice-areas/mergers-and-acquisitions" element={<MergersAndAcquisitions/>} />
          <Route path="/practice-areas/tax" element={<Tax/>} />
          <Route path="/practice-areas/white-collar" element={<WhiteCollar/>} />


  
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/10-key-questions-to-ask-before-hiring-a-law-firm" element={<BlogPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <WhatsappFloat />
      </div>
    </Router>
  );
}
