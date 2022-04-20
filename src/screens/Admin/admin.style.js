import styled from "styled-components";
export const Image = styled.img`
  width: 100%;
  height: 100vh;
`;
export const Title = styled.h1`
  @media screen and (max-width: 800px) {
    .left,
    .main,
    .right {
      width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
    }
  }
`;