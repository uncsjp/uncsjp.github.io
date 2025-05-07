import NavBar from './utilities/NavBar';
import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='block' class="font-grotesk">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
