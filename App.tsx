
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Faith from './pages/Faith';
import Nursery from './pages/Nursery';
import Primary from './pages/Primary';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import SchoolLife from './pages/SchoolLife';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faith" element={<Faith />} />
          <Route path="/nursery" element={<Nursery />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/school-life" element={<SchoolLife />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
