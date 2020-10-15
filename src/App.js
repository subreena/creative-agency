import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import NoMatch from './Components/NoMatch/NoMatch';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import AddService from './Components/Dashboard/AddService/AddService';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import Review from './Components/Dashboard/Review/Review';
import Order from './Components/Dashboard/Order/Order';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard/service-list/:email">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/service-list">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/order/:service">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/add-service">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/add-admin">
              <AddAdmin></AddAdmin>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/review">
              <Review></Review>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
