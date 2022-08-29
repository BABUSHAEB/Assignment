
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Header from './Components/DashboardComponents/Header';
import Appointments from './Components/Appointments';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Header />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
