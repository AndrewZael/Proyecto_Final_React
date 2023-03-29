import './assets/css/custom.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter> 
    </div>
  );
}

export default App;
