import './assets/css/custom.css';
import './assets/css/style.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import HeadSection from './components/HeadSection';
import HeadPage from './components/HeadPage';
import Filters from './components/Filters';
import Detail from './views/Detail';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
