import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FireMarker, CaneMarker, VolcanoMarker } from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import LegendInfoBox from './Legend';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [hover, setHover] = useState(false);

  const markers = eventData.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <FireMarker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    } else if (event.categories[0].id === 10) {
      return (
        <CaneMarker
          key={event.id}
          lat={event.geometries[event.geometries.length - 1].coordinates[1]}
          lng={event.geometries[event.geometries.length - 1].coordinates[0]}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    } else if (event.categories[0].id === 12) {
      return (
        <VolcanoMarker
          key={event.id}
          lat={event.geometries[0].coordinates[1]}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    }
    return null;
  });

  const onClick = () => {
    setLocationInfo(null);
  };

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB8R9ob3D1cy6q_76Q1MS87yPbyutLbXb8' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox info={locationInfo} onClick={onClick} />
      )}
      <LegendInfoBox />
      {hover && console.log('hovered')}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8765,
  },
  zoom: 7,
};

export default Map;
