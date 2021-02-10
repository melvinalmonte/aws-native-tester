import { Route, Router } from "react-router-dom";
import history from "./history";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Router history={history}>
      <Route exact path={"/"} component={Page1}/>
      <Route exact path={"/page2"} component={Page2}/>

    </Router>
   
  );
}

export default App;
