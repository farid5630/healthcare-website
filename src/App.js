// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Share/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Share/Footer/Footer';
import Departments from './Pages/Departments/Departments';
import About from './Pages/About/About/About';
import Doctors from './Pages/Doctors/Doctors';
import DoctorDetails from './Pages/Doctors/DoctorDetails/DoctorDetails';
import Login from './Pages/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registration from './Pages/Registration/Registration';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/departments">
            <Departments></Departments>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <PrivateRoute path="/dtdetails/:doctorId">            
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>          
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
