import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import * as WCSPages from "./pages";
import { Header, Footer } from "./components"
import { UserContextProvider } from "./contexts";

function App() {
  return (
      
      <UserContextProvider>
        <BrowserRouter>
          <Header />
          <main className="wcs-main">
            <Routes>
              
              <Route path="" Component={WCSPages.Home} />
              
              <Route path="/users" Component={WCSPages.UserList} />
              <Route path="/users/:user_id" Component={WCSPages.UserDetail} />
              
              <Route path="/products" Component={WCSPages.ProductList} />
              <Route path="/products/:product_id" Component={WCSPages.ProductDetail} />
              
              <Route path="*" Component={WCSPages.NotFound} />

            </Routes>
          </main>
          <Footer />
        </BrowserRouter>


      </UserContextProvider>
  );
}

export default App;
