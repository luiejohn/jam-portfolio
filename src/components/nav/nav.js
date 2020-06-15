import React from "react";

import style from "./nav.module.scss";
import svgIcon from "../../assets/icons/sprite.svg";

export default function nav() {
  return (
    <div className={style.container}>
      <div>
        <svg className={style.nav_icons}>
          <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
        </svg>
        <span>Projects</span>
      </div>
      <div>
        <svg className={style.nav_icons}>
          <use xlinkHref={`${svgIcon}#icon-user`}></use>
        </svg>
        <span>About Me</span>
      </div>
      <div>
        <svg className={style.nav_icons}>
          <use xlinkHref={`${svgIcon}#icon-globe`}></use>
        </svg>
        <span>Other Link</span>
      </div>
    </div>
  );
}
