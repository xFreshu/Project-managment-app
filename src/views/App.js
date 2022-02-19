import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/UI/Login/Login';
import Dashboard from '../components/UI/Dashboard/Dashboard';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DUMMY_DATA } from '../data/Tasks';
import ListOfTasks from '../components/UI/ListOfTasks/ListOfTasks';
import TestView from './testView';

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <Router>
      <Routes>
        <Route element={<Login setUserData={setUserData} userData={userData} />} path="/" />
        <Route
          element={<Dashboard userData={userData} DUMMY_DATA={DUMMY_DATA} />}
          path="/dashboard"
        />
        <Route element={<ListOfTasks userData={userData} />} path="/list-of-tasks" />
        <Route element={<TestView />} path="/test" />
      </Routes>
    </Router>
  );
};

App.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func
};
export default App;
