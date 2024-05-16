import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Home } from './containers';
import { useEffect } from 'react';
import { auth } from './config/firebase.config';

function App() {

  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred.providerData[0].email);
      } else {
        navigate('/home/auth', { replace: true })
      }
    });
  }, []);

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
