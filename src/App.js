import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';
import Dashboard from './components/dashboard';
import Create from './components/Create';
import { BrowserRouter as Router , Routes, Route, Navigate} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='dashboard'/>}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/create' element={<Create />}/>
      {/* <div className="App">
        {user ? (
          <div>
            <Dashboard />
          </div>
        ) : (
          <>
            {showSignup ? (
              <Signup onSwitchToLogin={() => setShowSignup(false)} />
            ) : (
              <Login onSwitchToSignup={() => setShowSignup(true)} />
            )}
          </>
        )}
      </div> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;