import './assets/css/custom.css';
import './assets/css/style.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
