import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './containers';

function App() {
  return (
    <div className='w-screen h-screen flex item-start justify-center overflow-hidden'>
      <Routes>
        <Route path='/home/*' element={<Home />} />
        
        <Route path='*' element={<Navigate to={"/home"} />}/>
      </Routes>
    </div>
  );
}

export default App;
