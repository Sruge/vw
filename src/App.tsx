import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import OtherPage from './components/OtherPage';
import Bild2 from './assets/Bild2.jpg';
import Bild3 from './assets/Bild3.jpg';
import Bild4 from './assets/Bild4.jpg';
import Bild6 from './assets/Bild6.jpg';
import Musiker from "./components/Musiker";
import Biografie from "./components/Biografie";
import Lehrer from "./components/Lehrer";
import Komponist from "./components/Komponist";

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* This should reference the HomePage component */}
                <Route path="/komponist" element={<OtherPage imageUrl={Bild3} content={<Komponist />} />} />
                <Route path="/musiker" element={<OtherPage imageUrl={Bild6} content={<Musiker />} />} />
                <Route path="/lehrer" element={<OtherPage imageUrl={Bild4} content={<Lehrer />} />} />
                <Route path="/biografie" element={<OtherPage imageUrl={Bild2} content={<Biografie />} />} />
            </Routes>
        </Router>
    );
}

export default App;
