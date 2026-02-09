import { useEffect, useState } from "react";
import ProductList from "./pages/productList";
import Nav from "./components/nav";
import Cart from "./pages/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [route, setRoute] = useState("home"); // 'home' or 'cart'

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log("API Error:", err));
  }, []);

  function addToCart(product) {
    setCart(prev => [...prev, product]);
    setRoute("cart");
  }

  function goToCart() {
    setRoute("cart");
  }

  function goHome() {
    setRoute("home");
  }

  return (
    <div>
      <Nav cartCount={cart.length} onCartClick={goToCart} onHomeClick={goHome} />
      <h1 className="p-3 text-2xl font-bold">Mini E-Commerce</h1>
      {route === "home" && <ProductList products={products} onAddToCart={addToCart} />}
      {route === "cart" && <Cart cartItems={cart} onContinueShopping={goHome} />}
    </div>
  );
}

export default App;
