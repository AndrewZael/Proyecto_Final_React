import './assets/css/custom.css';
import './assets/css/style.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';
import Detail from './views/Detail';
import Publications from './views/Publications';
import Home from './views/Home';
import LoginPage from './views/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header userLogin={false} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/detalle/:id' element={<Detail />} />
            <Route path='/publicaciones/' element={<Publications />} />
          </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
