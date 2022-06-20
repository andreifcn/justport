import MainPage from './components/body/mainpage';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
