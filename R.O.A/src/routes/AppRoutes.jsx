import { Routes, Route} from 'react-router-dom';
import { LoginPage } from '../pages/login/LoginPage';
import ProductPage from '../pages/shop/ProductPage';
import ProductDetails from '../pages/shop/ProductDetails';
import ProductDrawer from '../pages/shop/ProductDrawer';


function AppRoutes() {

  

  return(
    <>
      <Routes>
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/shopping' element={ <ProductPage /> } />
        <Route path='/product-details' element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default AppRoutes;