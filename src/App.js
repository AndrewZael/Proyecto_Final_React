import './assets/css/custom.css';
import './assets/css/style.scss';
import Header from './components/Header';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import CardInfo from './components/CardInfo';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <CardInfo />
        <Card />
        <Card home={true} />

      </BrowserRouter> 
    </div>
  );
}

export default App;
