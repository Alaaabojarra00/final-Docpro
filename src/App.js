import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Clinic, Doctor } from "./pages";
import { Footer, Navbar, Scroll, Agent } from "./components";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Scroll />
      <Agent />
      <Footer />
    </>
  );
};
const App = () => {
  useEffect(() => {
    const dir = localStorage.getItem("dir");
    const screen = localStorage.getItem("screen");
    document.body.classList.add(dir);
    document.body.classList.add(screen);
  }, []);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
        <Route
          exact
          path="/all-clinic"
          component={() => (
            <Layout>
              <Clinic />
            </Layout>
          )}
        />
        <Route
          exact
          path="/all-doctor"
          component={() => (
            <Layout>
              <Doctor />
            </Layout>
          )}
        />
        <Route
          exact
          path="/all-doctor/pages/:id"
          component={() => (
            <Layout>
              <Doctor />
            </Layout>
          )}
        />

        <Route path="*" component={() => <h1>Not found pages </h1>} />
      </Switch>
    </Router>
  );
};

export default App;
