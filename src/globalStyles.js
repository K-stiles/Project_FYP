import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*, *:before, *:after { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};

html, body {
  /* height: 100%; */
  /* font-family: "Outfit", sans-serif; */
  font-family: "GT Walsheim Pro";
  
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    /* font-size: 1rem; */
  /* background: #fff; */
  background: #02416b;
}
`;
