import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./components/User";
import Header from "./components/Reusable/Header";
import Home from "./components/Home";
import Footer from "./components/Reusable/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Home} />
        <Route exact path="/users/:id" component={User} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
