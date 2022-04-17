import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import PakageDetails from './Pages/PakageDetails/PakageDetails';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/pakage/:pakageId' element={<PakageDetails></PakageDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>



      </Routes>


    </div>
  );
}

export default App;
