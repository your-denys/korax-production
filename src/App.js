import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './view/LogIn/LogIn';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<LogIn />} />
      </Routes>
    </div>
   
  );
}

export default App;
