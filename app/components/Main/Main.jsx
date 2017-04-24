import React from 'react'
import { Route, Link } from 'react-router-dom'
import s from './Main.scss'
import Counter from './../../containers/CounterContainer'

const About = () => <div>
  {/* {fetch('https://api.github.com/gists')
    .then(r => r.json())
    .then(gists => console.log(gists))
  }*/}
  About
  </div>
const Home = () => <div>
  Home
  </div>

const Main = () =>
  <div className={s.root}>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/counter">Counter</Link>
    </div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/counter" component={Counter} />
  </div>

export default Main
