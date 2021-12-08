import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import CartProvider from "./contexts/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <BrowserRouter basename={"sincopado-react"}>
      <CartProvider>
        <Navbar />
        <Hero />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/search/:searchId">
            <SearchContainer />
          </Route>
          <Route exact path="/item/:itemId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <CartContainer />
          </Route>
          <Route path="*">
            <h1 className="text-center">¡Página no encontrada!</h1>
          </Route>
        </Switch>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
