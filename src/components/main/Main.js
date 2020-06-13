import React from "react";
import style from "./Main.module.scss";
import { Container } from "reactstrap";
import UserCard from "./../profile_card/card";
import Projects from "./../projects/project";

export default function Main() {
  return (
    <Container className={style.main}>
      <UserCard />
      <Projects />
    </Container>
  );
}
