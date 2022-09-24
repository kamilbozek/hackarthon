import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  *, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body {
  margin: 0;
  padding: 0;
}

h1, h2, p, ul, li {
  margin:0;
  padding:0;
}

html {
  font-size: 62.5%; 
}

body {
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  color: ${theme.secondaryText};
  background: ${theme.mainBackground};
}

/*temp styles just to speed up everything*/
a {
  color: inherit;
  text-decoration: none;
  transition: ${theme.mainTransition};
}
main {
  /*temp wrapper*/
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  @media ${theme.mq.small} {
    padding: 0 4rem;
  }
}
`;

export default GlobalStyle;