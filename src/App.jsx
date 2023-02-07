import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from "./components/pages/Home"
import Company from "./components/pages/Company"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import NewProject from "./components/pages/NewProject"

import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height" >
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/company" >
            <Company></Company>
          </Route>

          <Route path="/contact" >
            <Contact></Contact>
          </Route>

          <Route path="/newproject" >
            <NewProject></NewProject>
          </Route>

          <Route path="/projects" >
            <Projects></Projects>
          </Route>
          
        </Container>
      </Switch>

      <Footer/>
    </Router>
  )
}

export default App
