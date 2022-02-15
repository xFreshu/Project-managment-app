import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/UI/Login/Login';
import Dashboard from '../components/UI/Dashboard/Dashboard';
import { useState } from 'react';
import PropTypes from 'prop-types';
export const DUMMY_DATA = [
  { id: 1, name: 'PM task', assigned: 'PM' },
  { id: 2, name: 'Developer task', assigned: 'developer' }
];
const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <Router>
      <Routes>
        <Route element={<Login setUserData={setUserData} />} path="/" />
        <Route
          element={<Dashboard userData={userData} DUMMY_DATA={DUMMY_DATA} />}
          path="/dashboard"
        />
      </Routes>
    </Router>
  );
};

App.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func
};
export default App;
