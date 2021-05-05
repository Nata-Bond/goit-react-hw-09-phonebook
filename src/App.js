import React, {Suspense, lazy, useEffect} from "react";
import {Switch} from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
// import RegistrationPage from "./pages/registration/RegistrationPage";
// import LoginPage from "./pages/login/LoginPage";
// import ContactsPage from "./pages/contacts/ContactsPage";
import AppBar from "./components/appBar/AppBar";
import Container from './components/container/Container'
import authOperations from './redux/auth/authOperations'
import { useDispatch } from "react-redux";
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'


const HomePage = lazy(()=> import("./pages/home/HomePage"))
const RegistrationPage = lazy(()=>import ("./pages/registration/RegistrationPage"))
const LoginPage = lazy(()=> import("./pages/login/LoginPage"))
const ContactsPage = lazy(()=> import("./pages/contacts/ContactsPage"))


const App = () => {
  
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(authOperations.getCurrentUser())
  },[dispatch])

  return (
    <Container>
        <AppBar/>
        <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoute exact path="/">
          <HomePage/>
          </PublicRoute>
          <PublicRoute path="/register" redirectTo="/contacts" restricted>
            <RegistrationPage/>
          </PublicRoute>
          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginPage/>
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
<ContactsPage/>
         </PrivateRoute>
        </Switch>
        </Suspense>
      </Container>
  );
}

export default App;


