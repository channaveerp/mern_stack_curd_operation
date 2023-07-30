import './App.css';
import Home from './component/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './component/Register/Register';
import Edit from './component/Edit/Edit';
import Details from './component/Details/Details';
function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
