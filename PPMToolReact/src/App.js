import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/layout/NotFound';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Dashboard from './components/Dashboard';

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
