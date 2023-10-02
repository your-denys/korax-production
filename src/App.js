import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LogIn from './view/LogIn/LogIn';
import PremiumPage from './PremiumPage';
import PremiumPageSecond from './PremiumPageSecond';
import ScrollToTop from './components/ScrollTop/ScrollTop';


function App() {

  return (
    <div>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<LogIn />} />
        <Route path="/trading-for-everyone" element={<PremiumPage />} />
        <Route path="/trading-for-everyone/50" element={<PremiumPageSecond />} />
      </Routes>
    </div>
   
  );
}

export default App;
