/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import classNames from 'classnames/bind'
import style from "./Home.module.scss";

const cx = classNames.bind(style)

function Home() {
  return (
    <div className={cx('wrapper')}>
    </div>
  );
}

export default Home;
