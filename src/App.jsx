import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing/Landing';
import Xchange from './Pages/exchange/Xchange';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="exchange" element={<Xchange />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
