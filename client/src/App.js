import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";
import data from "./data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState("");

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

  console.log(products);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter
            handleFilterBySize={handleFilterBySize}
            size={size}
            handleFilterBySort={handleFilterBySort}
            sort={sort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
