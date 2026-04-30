import MainHeader from './components/MainHeader'
import { useEffect } from 'react'
import { useAuthStore } from './store/authStore'
import { useTheme } from './js/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRoutes from './routes/AppRoutes';



function App() {
  const fetchUser = useAuthStore(s => s.fetchUser);
  const {theme} = useTheme();
  useEffect( () => {

    document.documentElement.setAttribute("data-theme", theme);

    fetchUser();
  },[theme]);

  return (
    <>
      
      <AppRoutes />
    </>
  )
}

export default App
