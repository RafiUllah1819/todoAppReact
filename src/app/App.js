import React from 'react'
import Header from './Header'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './Home'
import About from './About'
const App = () => {
    return (
        <div className="container">
            <Header />
            <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Redirect from="/" to="/home" />
            </Switch>
        </div>
    )
}
export default App;