import React from "react";
import "./Menu.css";
import { TitlePage, MenuList, Button } from "@/components/index";

function Menu() {
  return (
    <div className="menu">
      <TitlePage title="Menu Restaurant" icon="😍" />
      <div className="container">
          {/* <MenuList /> */}
      </div>
      <div className="menu-explore">
        <div className="menu-explore-left">
          <div className="menu-explore-left-content">
            <div>
              <h2>Explore the new taste</h2>
              <p>Enjoy our luscious dishes wherever you want</p>
              <Button come="/menu">order now</Button>
            </div>
          </div>
        </div>
        <div className="menu-explore-right">
          <div className="menu-explore-right-content">
            <div>
              <div className="menu-explore-right-item">
                <div>
                  <h5>pizza</h5>
                  <span>100.000đ</span>
                </div>
                <p>Shrimp, Squid, Pineapple</p>
              </div>
              <div className="menu-explore-right-item">
                <div>
                  <h5>pizza</h5>
                  <span>100.000đ</span>
                </div>
                <p>Shrimp, Squid, Pineapple</p>
              </div>
              <div className="menu-explore-right-item">
                <div>
                  <h5>pizza</h5>
                  <span>100.000đ</span>
                </div>
                <p>Shrimp, Squid, Pineapple</p>
              </div>
              <div className="menu-explore-right-item">
                <div>
                  <h5>pizza</h5>
                  <span>100.000đ</span>
                </div>
                <p>Shrimp, Squid, Pineapple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-delivery">
        <div className="container">
          <div className="menu-delivery-item">
            <div>
              <i className="fas fa-shipping-fast"></i>
            </div>
            <div className="menu-delivery-item-content">
              <h5>free shipping</h5>
              <p>Sign up for updates and get free shipping</p>
            </div>
          </div>
          <div className="menu-delivery-item">
            <div>
              <i className="far fa-clock"></i>
            </div>
            <div className="menu-delivery-item-content">
              <h5>30 Minutes Delivery</h5>
              <p>Sign up for updates and get free shipping</p>
            </div>
          </div>
          <div className="menu-delivery-item">
            <div>
              <i className="fas fa-pizza-slice"></i>
            </div>
            <div className="menu-delivery-item-content">
              <h5>Best Quality Guarantee</h5>
              <p>Sign up for updates and get free shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
