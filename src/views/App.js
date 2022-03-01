import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/UI/Login/Login';
import Dashboard from '../components/UI/Dashboard/Dashboard';
import PropTypes from 'prop-types';
import ListOfTasks from './ListOfTasks/ListOfTasks';
import CreateTicket from './CreateTicket/CreateTicket';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<ListOfTasks />} path="/list-of-tasks" />
        <Route element={<CreateTicket />} path="/create-ticket" />
      </Routes>
    </Router>
  );
};

App.propTypes = {
  userData: PropTypes.object,
  setUserData: PropTypes.func
};
export default App;
