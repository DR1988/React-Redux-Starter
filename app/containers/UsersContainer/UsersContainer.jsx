import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { actions, selectUsers } from '../../redux/users'
import Users from '../../components/Users/Users'
import config from '../../config/index'
import MyMapComponent from '../../components/MyMapComponent'

class UsersContainer extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state={
    geo: { lat: -34.397, lng: 150.644 },
  }

  componentDidMount() {
    const { users, getUsers } = this.props
    if (!users.length) getUsers()
  }

  showAddress = (address) => {
    const geo = {
      lat: +address.geo.lat,
      lng: +address.geo.lng,
    }
    this.setState({
      geo,
    })
  }

  render() {
    const { users } = this.props
    return (
      <Users users={users} showAddress={this.showAddress}>
        <MyMapComponent
          geo={this.state.geo}
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.GOOGLE_API_TOKEN}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ width: '400px', height: '400px' }} />}
          containerElement={<div style={{ width: '400px', height: '400px' }} />}
          mapElement={<div style={{ width: '400px', height: '400px' }} />}
        />
      </Users>)
  }
}

const mapStateToProps = state => ({
  users: selectUsers(state),
})
export default withRouter(connect(mapStateToProps, actions)(UsersContainer))
