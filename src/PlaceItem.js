import React, { Component } from 'react';
import mapbox from 'mapbox-gl'

class PlaceItem extends Component {

  goTo() {
    const app = this.props.app
    const map = app.state.map
    const places = this.props.places

    map.flyTo({
      center: [places.longitude, places.latitude],
      zoom: 12
    })
  }

  render () {
    const app = this.props.app
    const map = app.state.map

    const places = this.props.places

    if (map) {
      const popup = new mapbox.Popup({
        closeButton: false
      })

      popup.setHTML(places.name)

      const marker = new mapbox.Marker({
        color: "#2727e6"
      })

      marker.setLngLat([places.longitude, places.latitude])
      marker.setPopup(popup)

      marker.addTo(map)
    }

    return (
      <div className="place-item" onClick={() => this.goTo()}>
        {places.name} <br /><span className="coordinates">({places.latitude}, {places.longitude})</span>
      </div>

    )
  }
}

export default PlaceItem;
