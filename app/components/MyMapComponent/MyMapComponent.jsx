import React from 'react'
import PropTypes from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

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

MyMapComponent.defaultProps = {
  geo: { lat: 34.397, lng: -117.644 },
}

MyMapComponent.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
  geo: PropTypes.objectOf(PropTypes.number),
}

export default MyMapComponent
