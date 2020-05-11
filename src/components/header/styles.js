import styled from "styled-components"
import { COLORS } from "../../constants"
import { Container, mobileMixin } from "../../globalStyles"

export const HeaderContainer = styled(Container)`
  display: flex;
  padding: 50px 25px;
  justify-content: flex-end;
  ${mobileMixin(`
    justify-content: center;
  `)}
`

export const Logo = styled.img`
  width: 160px;
  color: ${COLORS.LOGO};
`
