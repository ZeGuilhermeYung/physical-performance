import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  text-decoration: none;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input {
  all:unset;
}
textarea {
  all:unset;
}
button {
  all: unset;
  cursor: pointer;
}

///////// Global configuration //////////////

body {
  width: 100%;
  background-color: #162731;
  font-family: 'Teko', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
h1 {
  color: #FFFFFF;
  font-family: 'Kdam Thmor Pro';
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2.45px;
}
h2 {
  color: #FFFFFF;
  font-size: 32px;
  font-weight: 500;
}
h3 {
  color: #FFFFFF;
  font-size: 27px;
}
h4 {
  color: #FFFFFF;
  //font-family: 'Lato';
  font-size: 23px;
}
h5 {
  color: #FFFFFF;
  //font-family: 'Lato';
  font-size: 17px;
}
h6 {
  color: #FFFFFF;
  text-align: center;
  //font-family: 'Lato';
  font-size: 11px;
  text-align: left;
}
::placeholder, ::-webkit-input-placeholder, :-webkit-autofill {
  font-size: 20px;
  color: #1E3243;
}`;
 
