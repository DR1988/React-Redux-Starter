import React from 'react'
import PropTypes from 'prop-types'

import s from './Users.scss'

const Users = ({
  children,
  users,
  showAddress,
}) => (
  <div className={s.root}>
    <section className={s['user-list']}>
      {users.length ?
        users.map(user =>
          <div key={user.id} className={s['user-list__item']}>{user.name}
            <button onClick={() => showAddress(user.address)}>Show address</button>
          </div>,
      ) : <span> Loading... </span>}
    </section>
    {children}
  </div>
)

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  showAddress: PropTypes.func.isRequired,
}

export default Users
