import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Start from './Pages/Start';
import 'intl-tel-input/build/css/intlTelInput.css';
import Signup from './Pages/Signup';
import OTPsent from './Pages/OTPsent';
import PersonalDetaills from './Pages/PersonalDetaills';
import Ethinicity from './Pages/Ethinicity';
import Interest from './Pages/Interest';
import Hobbies from './Pages/Hobbies';
import Uploadpic from './Pages/Uploadpic';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Calling from './Pages/Calling';
import Filter from './Pages/Filter';
import Add from './Pages/Add';
import BuySwipes from './Pages/BuySwipes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Start/>} />

        <Route path='/home' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/otp' element={<OTPsent/>} />
        <Route path='/PersonalDetails' element={<PersonalDetaills/>} />
        <Route path='/Ethinicity' element={<Ethinicity/>} />
        <Route path='/Interestedin' element={<Interest/>} />
        <Route path='/hobbies' element={<Hobbies/>} />
        <Route path='/uploadimage' element={<Uploadpic/>} />
        <Route path='/call' element={<Calling/>} />
        <Route path='/filter' element={<Filter/>} />
        <Route path='/ad' element={<Add/>} />
        <Route path='/buylikes' element={<BuySwipes/>} />

      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;