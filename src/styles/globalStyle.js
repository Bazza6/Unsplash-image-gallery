import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
	box-sizing: border-box;
	font-size: 16px;
	height: 100%;
}
*,
*:before,
*:after {
	box-sizing: inherit;
	font-family: helvetica;
}

body{
	margin: 0;
	padding: 0;
	height: 100%
}
`;

export default GlobalStyle;