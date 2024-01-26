
import { BrowserRouter,Route, Router, Routes } from 'react-router-dom';
import Product from './components/Product';
import Login from './components/Login';

import CreateUser from './components/CreateUser';
import UpdateProduct from './components/UpdateProduct';
import Test from './components/Test';
import CreateProduct from './components/CreateProduct';



//Project em vua lam voi nen chua co dau tu nhieu nen con so sai mong anh chi bo qua a T.T

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/product/update/:id' element={<UpdateProduct/>}></Route>
          <Route path='/product/create' element={<CreateProduct/>}></Route>
          <Route path ='/test/product/:id' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
 
     
    </div>
  );
}

export default App;
