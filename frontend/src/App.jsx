import { Routes, Route } from 'react-router-dom';
import './App.css'

// Pages
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'

import { Table } from './pages/Table'

// Components
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/signup' Component={SignUp} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/table' Component={Table} />
        </Routes>
      </div>

      <Navbar />
    </div>
  );
}

export default App;
