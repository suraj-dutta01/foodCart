import AdminLogin from './Componante/AdminLogin';
import LandingPage from './Componante/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './Componante/UserLogin';
import AdminSignup from './Componante/AdminSignup';
import UserSignup from './Componante/UserSignup';
import AdminHomePage from './Componante/AdminHomePage'
import Error from './Componante/ErrorPage';
import UserHomePage from './Componante/UserHomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/user' element={<UserLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignup/>}/>
        <Route path='/usersignup' element={<UserSignup/>}/>
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
        <Route path='/userhomepage/*'  element={<UserHomePage/>}/>
       </Routes>
       </BrowserRouter>
       
       
    </div>
  );
}

export default App;
