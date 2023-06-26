import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './App.css';
import * as WCSPages from "./pages";
import { Header, Footer, Cart } from "./components"
import { CartContextProvider, ProductContextProvider, UserContextProvider } from "./contexts";

function App() {
  return (
      
      <UserContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
          <BrowserRouter>
            <Header />
            <main className="wcs-main">              
              <Routes>
                
                <Route path="" Component={WCSPages.Home} />
                
                <Route path="/users" Component={WCSPages.UserList} />
                <Route path="/users/:user_id" Component={WCSPages.UserDetail} />
                
                <Route path="/shop" Component={WCSPages.Shop} />
                <Route path="/products/:product_id" Component={WCSPages.ProductDetail} />
                
                <Route path="*" Component={WCSPages.NotFound} />

              </Routes>


              <Routes>
                <Route path={"/shop"} Component={Cart}/>
                <Route path={"/products/:id"} Component={Cart}/>
              </Routes>

            </main>

            <Footer />
          </BrowserRouter>
          </ProductContextProvider>
        </CartContextProvider>

      </UserContextProvider>
  );
}

export default App;
