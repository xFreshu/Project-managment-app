import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/UI/Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
      </Routes>
    </Router>
  );
};

export default App;
