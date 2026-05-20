import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ProblemStatement from './pages/ProblemStatement';
import Contributors from './pages/Contributors';
import Faqs from './pages/Faqs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="problem-statement" element={<ProblemStatement />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
