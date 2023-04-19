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
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/form" exact element={<Form />} />
          <Route path="/formTimechamp" exact element={<FormTwo />} />
          <Route path="/formHr" exact element={<FormThree />} />
          <Route path="/dashboardTC" exact element={<DashboardTC />} />
          <Route path="/dashboardHR" exact element={<DashboardHR />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/reviewtwo/:id" element={<ViewPageTwo />} />
          <Route path="/reviewthree/:id" element={<ViewPageThree />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/loginTC" exact element={<LoginPageTwo />} />
          <Route path="/loginHR" exact element={<LoginPageThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
