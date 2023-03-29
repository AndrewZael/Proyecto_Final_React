import './assets/css/custom.css';
import './assets/css/style.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import HeadSection from './components/HeadSection';
import HeadPage from './components/HeadPage';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Filters />
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
