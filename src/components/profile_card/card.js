import React from "react";

import style from "./card.module.scss";

import user from "../../assets/img/user.jpg";

export default function Card() {
  return (
    <div className={style.container}>
      <div className={style.user_info}>
        <div className={style.user_img_container}>
          <img src={user} alt="useimager-" className={style.user_img} />
        </div>

        <div>
          <div className={style.user_name}>Jamaica L. Romano</div>
          <div className={style.user_location}>Cavite City, Philippines</div>
        </div>
        <div className={style.user_i3}>
          <div>
            Crafting the future of digital experiences through emotional design
          </div>
          <div className={style.user_email}>sample@mail.com</div>
        </div>
        <div className={style.user_social_cont}>
          <div className={style.user_social}></div>
          <div className={style.user_social}></div>
          <div className={style.user_social}></div>
        </div>
      </div>
      <div className={style.user_skills}>
        <div>
          <div className={style.user_skill_header}>SKILLS</div>
          <div className={style.user_skills_cont}>
            <div className={style.user_skill}>drawing</div>
            <div className={style.user_skill}>digital arts</div>
            <div className={style.user_skill}>illustration</div>
            <div className={style.user_skill}>character design</div>
            <div className={style.user_skill}>character illustration</div>
            <div className={style.user_skill}>painting</div>
            <div className={style.user_skill}>photoshop</div>
          </div>
        </div>
      </div>
    </div>
  );
}
