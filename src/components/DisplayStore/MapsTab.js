import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapsTab extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '45vh', width: '140%', position:'relative', right:50 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB30dzZgHxhx5-iOk64-QiJCuH9k0JBbnw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapsTab;