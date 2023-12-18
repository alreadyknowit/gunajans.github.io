import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavBar from './components/CustomNavBar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes'
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/gunajans.github.io'>
      <CustomNavBar />
      <AppRoutes />
      </BrowserRouter>
    
    </div>
  );
}

export default App;