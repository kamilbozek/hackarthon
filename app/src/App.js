import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import { theme } from "./theme/theme";
import Art from './views/Art';
import Home from './views/Home';


function App() {
  return (
      <div>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <Switch>
                      <Route path='/' exact component={Home} />
                      <Route path='/art' exact component={Art} />
                  </Switch>
              </BrowserRouter>
          </ThemeProvider>
      </div>
  );
}

export default App;
