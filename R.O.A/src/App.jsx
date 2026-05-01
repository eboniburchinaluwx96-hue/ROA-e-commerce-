import MainHeader from './components/MainHeader'
import { useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRoutes from './routes/AppRoutes';



function App() {
  const fetchUser = useAuthStore(s => s.fetchUser);
  
  useEffect (()=> {
    fetchUser();
  },[]);
  return (
    <>
      <MainHeader />
      <AppRoutes />
    </>
  )
}

export default App
