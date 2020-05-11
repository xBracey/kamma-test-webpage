import styled, { createGlobalStyle, css } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
    }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
`

export const mobileMixin = rules => css`
  @media (max-width: 900px) {
    ${rules}
  }
`
