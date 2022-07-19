// import logo from './logo.svg';
// import './App.css';
// React-Bootstrap css link
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/HeaderComponent/Header'
import Home from './Components/HomeComponent/Home'
import Login from './Components/LogInComponent/Login';
import Details from './Components/DetailsComponent/Details'
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />}/>
      {/* <Route path='/login' element={<Login />}/> */}
      <Route path='/signup' element={<Home />}/>
      <Route path='/details' element={<Details />}/>
    </Routes>
    </>
  );
}

export default App;
