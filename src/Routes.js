import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import NotFound from './pages/NotFound'
import Contact from './pages/Contact';
import Services from './pages/Services';
import References from './pages/References';

const AppRoutes = () => (
    <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/references" element={<References />} />
        <Route path="*" element={<NotFound />} />

    </Routes>

);

export default AppRoutes;
