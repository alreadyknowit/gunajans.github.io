import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/custom-navbar';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './Routes'
import FooterComponent from "./components/footer";
const appStyle = {
    width: "80vw",
    margin: "auto",
    fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n"
}

function App() {
    return (
        <div className="App" style={appStyle}>
            <BrowserRouter basename='/gunajans.github.io'>
                <CustomNavbar/>
                <AppRoutes/>
                <FooterComponent/>

            </BrowserRouter>


        </div>
    );
}

export default App;