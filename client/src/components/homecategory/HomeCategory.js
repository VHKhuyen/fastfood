import React from "react";
import './HomeCategory.css'
function HomeCategory() {
  return (
    <div className="home-category">
      <div className="home-category-list">
        <div className="home-category-item">
          <span>combo</span>
        </div>
        <div className="home-category-item">
          <span>pizza</span>
        </div>
        <div className="home-category-item">
          <span>burger</span>
        </div>
        <div className="home-category-item">
          <span>chicken</span>
        </div>
        <div className="home-category-item">
          <span>sauces</span>
        </div>
        <div className="home-category-item">
          <span>drinks</span>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
