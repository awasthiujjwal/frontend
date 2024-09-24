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
import PerfectMatch from './Pages/PerfectMatch';
import Gopremium from './Pages/Gopremium';
import Filterpremium from './Pages/Filter+premium';
import Callpage from './Pages/Callpage';
import Profile from './Pages/Profile';
import Matches from './Pages/Matches';
import Yourlikes from './Pages/Yourlikes';
import Chatpage from './Pages/Chatpage';
import Createevent from './Pages/Createevent';
import Searchandcreateevent from './Pages/Searchandcreateevent';
import WrongOTP from './Pages/WrongOTP';
import SignupSuccessfull from './Pages/SignupSuccessfull';
import Success from './Pages/Success';

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
        <Route path='/PerfectMatch' element={<PerfectMatch/>} />
        <Route path='/Subscription' element={<Gopremium/>} />
        <Route path='/premiumfiter' element={<Filterpremium/>} />
        <Route path='/Callpage' element={<Callpage/>} />
        <Route path='/VideoCall' element={<Callpage/>} />
        <Route path='/yourprofile' element={<Profile/>} />
        <Route path='/yourmatches' element={<Matches/>} />
        <Route path='/yourlikes' element={<Yourlikes/>} />
        <Route path='/yourchat' element={<Chatpage/>} />
        <Route path='/CreateEvent' element={<Createevent/>} />
        <Route path='/SearchEvents' element={<Searchandcreateevent/>} />
        <Route path='/wrongOTP' element={<WrongOTP/>} />
        <Route path='/SignupSuccess' element={<SignupSuccessfull/>} />
        <Route path='/Success' element={<Success/>} />
      
        
      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;