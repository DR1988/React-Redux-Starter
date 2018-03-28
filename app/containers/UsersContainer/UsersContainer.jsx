import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import { actions, selectUsers } from '../../redux/users'
import Users from '../../components/Users/Users'

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
  const { isMarkerShown, geo } = props
  return (
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: geo.lat, lng: geo.lng }}
      center={{ lat: geo.lat, lng: geo.lng }}
    >
      {isMarkerShown && <Marker position={{ lat: geo.lat, lng: geo.lng }} />}
    </GoogleMap>
  )
},
))

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
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1lTN_5jEqVYytcAVZ9qSI4aIX_ZM6a3E&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ width: '400px', height: '400px' }} />}
          containerElement={<div style={{ width: '400px', height: '400px' }} />}
          mapElement={<div style={{ width: '400px', height: '400px' }} />}
        />
      </Users>)
    // return <Users users={users} showAddress={this.showAddress} />
  }
}

const mapStateToProps = state => ({
  users: selectUsers(state),
})
export default withRouter(connect(mapStateToProps, actions)(UsersContainer))
