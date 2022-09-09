import React from "react";
import "./InfoHeader.css";

function InfoHeader() {
  return (
    <div className="info-header">
      <div className="container">
        <div className="info-header-left">
          <div>
            <i className="fas fa-phone-volume"></i>
            <p>call us: +84 1888888888</p>
          </div>
          <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            <p>luong tai _ bac ninh</p>
          </div>
        </div>
        <div className="info-header-right" >
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
}

export default InfoHeader;
