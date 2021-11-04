import React, { useEffect, useState } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./components/Profile";
//import Checkout from "./components/checkout/Checkout";

function App() {
  //google login
  const [users, setUsers] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((theUser) => {
      setUsers(theUser);
    });
  }, []);
  console.log(users);
  //email and password
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user && !users ? (
          <Login />
        ) : (
          <Switch>
            {/* <Route exact path="/checkout">
              <Checkout users={users} />
            </Route> */}
            <Route exact path="/Profile">
              <Profile users={users} />
            </Route>

            <Route exact path="/">
              <HomeScreen users={users} />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
