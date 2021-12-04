import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar, Scroll, Switcher } from './components'
import { Home } from './pages'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Switcher />
      <Scroll />
    </>
  )
}
const App = () => {
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
        <Route path="*" component={() => <h1>Not found pages </h1>} />
      </Switch>
    </Router>
  )
}

export default App
