import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Start from './Pages/Start';
import 'intl-tel-input/build/css/intlTelInput.css';
import Signup from './Pages/Signup';
import OTPsent from './Pages/OTPsent';
import PersonalDetaills from './Pages/PersonalDetaills';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/otp' element={<OTPsent/>} />
        <Route path='/PersonalDetails' element={<PersonalDetaills/>} />

      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
