import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import s from './Main.scss'
import Counter from './../../containers/CounterContainer'
import Users from '../../containers/UsersContainer/UsersContainer'

const About = () => <div>
  React Redux-saga boileplate with reacr-router
  </div>
const Home = () => <div>
  Home
  </div>
const NotFound = () => <div>Not Found</div>

const Main = () =>
  <div className={s.root}>
    <div className={s.links} >
      <NavLink
        activeStyle={{ color: 'lightseagreen' }}
        to="/"
        className={s.link__item}
        strict
        exact
      >Home</NavLink>
      <NavLink
        activeStyle={{ color: 'lightseagreen' }}
        to="/about"
        className={s.link__item}
        strict
        exact
      >About</NavLink>
      <NavLink
        activeStyle={{ color: 'lightseagreen' }}
        to="/counter"
        className={s.link__item}
        strict
        exact
      >Counter</NavLink>
      <NavLink
        activeStyle={{ color: 'lightseagreen' }}
        to="/users"
        className={s.link__item}
        strict
        exact
      >Users</NavLink>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/counter" component={Counter} />
      <Route path="/Users" component={Users} />
      <Route component={NotFound} />
    </Switch>
  </div>

export default Main
