import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home, Clinic, Doctor, ContactUs, Error404 } from './pages'
import { Footer, Navbar, Scroll, Agent } from './components'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Scroll />
      <Agent />
      <Footer />
    </>
  )
}
const App = () => {
  useEffect(() => {
    const dir = localStorage.getItem('dir')
    const screen = localStorage.getItem('screen')
    document.body.classList.add(dir)
    document.body.classList.add(screen)
  }, [])
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
          path="/contact-us"
          component={() => (
            <Layout>
              <ContactUs />
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
        <Route
          exact
          path="/all-clinic/pages/:id"
          component={() => (
            <Layout>
              <Clinic />
            </Layout>
          )}
        />

        <Route path="*" component={()=><Error404 />} />
      </Switch>
    </Router>
  )
}

export default App
