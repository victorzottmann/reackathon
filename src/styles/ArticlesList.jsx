import styled from "styled-components";

export const ArticlesContainer = styled.div`
  position: relative;
  margin: 20px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-self: center;

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
  }
`;
