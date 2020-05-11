import styled from "styled-components";
import { COLORS } from "../constants";

export const Background = styled.div`
  background-color: ${COLORS.LIGHT_GREY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;