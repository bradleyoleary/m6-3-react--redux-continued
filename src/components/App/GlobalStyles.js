import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 html,
 body,
 div,
 span {
   margin: 0;
   padding: 0;
   border: 0;
   vertical-align: baseline;
   font-family: 'Montserrat', sans-serif;
   background-color: #0b0f14;
 }


 *,
 *:before,
 *:after {
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
   font-family: Montserrat, sans-serif;
 }
 `;

export default GlobalStyles;
