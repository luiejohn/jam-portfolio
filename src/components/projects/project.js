import React from "react";

import style from "./projects.module.scss";
import svgIcon from "../../assets/icons/sprite.svg";

export default function Project() {
  return (
    <div className={style.container}>
      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>

      <div className={style.project}>
        <div className={style.project_imgCont}>
          {/* <img className={style.project_image} src={user} /> */}
        </div>
        <div className={style.project_desc}>The Cat Returns Drawing</div>

        <div className={style.project_hiddenMenu}>
          <div className={style.project_btn}>
            <svg>
              <use xlinkHref={`${svgIcon}#icon-rocket`}></use>
            </svg>
            View
          </div>
        </div>
      </div>
    </div>
  );
}
