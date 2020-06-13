import React from "react";

import style from "./nav.module.scss";

export default function nav() {
  return (
    <div className={style.container}>
      <div>nav link 1</div>
      <div>nav link 2</div>
      <div>nav link 3</div>
    </div>
  );
}
