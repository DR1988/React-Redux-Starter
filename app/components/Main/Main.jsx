import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import s from './Main.scss'
import Counter from './../../containers/CounterContainer'

const About = () => <div className={s.green}>
  {/* {fetch('https://api.github.com/gists')
    .then(r => r.json())
    .then(gists => console.log(gists))
  }*/}

  About
  </div>
const Home = () => <div>
  Home
  </div>
const NotFound = () => <div>Not Found</div>

const Main = () =>
  <div className={s.root}>
    <div>
      <Link to="/" className={s.green}>Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/counter">Counter</Link>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
      <Route component={NotFound} />
    </Switch>

  </div>

export default Main
