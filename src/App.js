import './App.css';
import Page1 from './Page1'
import Page2 from './Page2'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />} />
          <Route path='/events' element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
