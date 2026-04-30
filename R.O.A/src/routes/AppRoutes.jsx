import { Routes, Route} from 'react-router-dom';
import { LoginPage } from '../pages/login/LoginPage';
import ProductPage from '../pages/shop/ProductPage';


function AppRoutes() {

  return(
    <>
      <Routes>
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/shopping' element={ <ProductPage /> } />
      </Routes>
    </>
  );
}

export default AppRoutes;