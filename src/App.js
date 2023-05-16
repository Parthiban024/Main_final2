import './App.css';
import Home from "./component/homePage"
import Form from "./component/formPage"
import FormTwo from "./component/formTimechamp"
import FormThree from "./component/formHr"
import Dashboard from "./component/dashboardPage"
import DashboardTC from "./component/dashboardTC"
import DashboardHR from "./component/dashboardHR"
import LoginPage from "./component/loginPage"
import LoginPageTwo from "./component/loginTC"
import LoginPageThree from "./component/loginHR"
import ReviewDetails from './component/viewPage'
import ViewPageTwo from "./component/viewPageTC"
import ViewPageThree from "./component/viewPageHR"
import MainPage from "./component/Slidebar"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Navigate  } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <MainPage />

        <Routes>
  
          <Route path="/login" element={ <LoginPage />} />
          <Route path="/" element={ <Home/>} />
          <Route path="/admin" element={ <Dashboard />} />
          <Route path="/form" element={ <Form/>} />
          <Route path="/formTimechamp" element={<FormTwo/>} />
          <Route path="/formHr" element={<FormThree />} />
          <Route path="/dashboardTC" element={ <DashboardTC />} />
          <Route path="/dashboardHR" element={ <DashboardHR />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/reviewtwo/:id" element={<ViewPageTwo />} />
          <Route path="/reviewthree/:id" element={<ViewPageThree />} />
          <Route path="/loginTC" element={<LoginPageTwo />} />
          <Route path="/loginHR" element={<LoginPageThree />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;