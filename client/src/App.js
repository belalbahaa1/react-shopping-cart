import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const handleFilterBySize = (e) => {
    setSize(e.target.value);
    if (e.target.value == "ALL") {
      setProducts(data);
      console.log(data);
    } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter(
        (p) => p.size.indexOf(e.target.value) != -1
      );
      console.log("newProducts", newProducts);
      setProducts(newProducts);
    }
  };

  const handleFilterBySort = (e) => {
    setSort(e.target.value);
    let sort = e.target.value;
    setSort(sort);
    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (sort == "lowest") {
        return a.price - b.price;
      } else if (sort == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setProducts(newProducts);
  };

  const handleAddToCart = (product) => {
    let cartItemsClone = [...cartItems];
    let productClone = { ...product };
    let productIndex = cartItemsClone.findIndex((p) => p.id == productClone.id);
    if (productIndex == -1) {
      productClone.qty = 1;
      cartItemsClone.push(productClone);
    } else {
      cartItemsClone[productIndex].qty++;
    }
    setCartItems(cartItemsClone);
  };
  const handleRemoveFromCart = (product) => {
    let cartItemsClone = [...cartItems];
    let productClone = { ...product };
    let productIndex = cartItemsClone.findIndex((p) => p.id == productClone.id);
    if (productIndex != -1) {
      if (cartItemsClone[productIndex].qty > 1) {
        cartItemsClone[productIndex].qty--;
      } else {
        cartItemsClone.splice(productIndex, 1);
      }
    }
    setCartItems(cartItemsClone);
  };
  // handle remove all from cart function
  const handleRemoveAllFromCart = () => {
    setCartItems([]);
  };
  // save data to local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} handleAddToCart={handleAddToCart} />
          <Filter
            productNumber={products.length}
            handleFilterBySize={handleFilterBySize}
            size={size}
            handleFilterBySort={handleFilterBySort}
            sort={sort}
          />
        </div>
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleRemoveAllFromCart={handleRemoveAllFromCart}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
