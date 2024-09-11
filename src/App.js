import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './Pages/Login';
import Start from './Pages/Start';
import 'intl-tel-input/build/css/intlTelInput.css';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />

      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
