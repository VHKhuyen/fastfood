import React, { useEffect, useState } from "react";
import { Button, MenuItem } from "../index";

const tabs = ["burger", "pizza", "pasta", "drink"];

function MenuList() {
  const [category, setButton] = useState("burger");
  const [products, setProducts] = useState([]);
  const [loadMoreItem, setLoadMoreItem] = useState(8);

  useEffect(() => {
    const listProducts = `http://localhost:3001/${category}`;
    fetch(listProducts)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, [category]);

  const handleButton = (tab) => {
    setButton(tab);
  };
  return (
    <div>
      <div className="menu-list">
        <h2>Menu of the day</h2>
        <div className="menu-list-type">
          {tabs.map((tab) => {
            return (
              <Button
                key={tab}
                onClick={() => handleButton(tab)}
                Style={tab === category ? "btn-radius active" : "btn-radius"}
                come="/menu"
              >
                {tab}
              </Button>
            );
          })}
        </div>
        <div className="menu-list-product">
          {products.slice(0, loadMoreItem).map((product, index) => {
            return <MenuItem key={index} product={product} />;
          })}
        </div>
        <div className="menu-load-more">
          {products.length > loadMoreItem ? (
            <Button
              onClick={() => setLoadMoreItem(loadMoreItem + 5)}
              come=""
              Size="btn-medium"
            >
              Load More
            </Button>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}

export default MenuList;
