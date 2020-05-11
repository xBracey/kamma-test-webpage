import React from "react"
import { Header } from "../components"
import { Background } from "./styles"
import { GlobalStyle } from "../globalStyles"

export default () => (
  <Background>
    <GlobalStyle />
    <Header />
  </Background>
)
