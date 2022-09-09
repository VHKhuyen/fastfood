import React from "react";
import './TitlePage.css'

export default  function TitlePage({title, icon}) {
  return (
    <div className="page-title">
      <h1>
        {title} <span>{icon}</span>
      </h1>
    </div>
  );
};
