import React from "react";
import { Header, Logo } from "./styles";
import logo from "../../../static/logo.svg";

export default () => (
  <Header>
    <Logo src={logo} />
  </Header>
);
