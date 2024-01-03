// // LocationFilter.js
// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const LocationFilter = ({ onLocationSelect }) => {
//   const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)

//   const handleMapClick = (e) => {
//     setPosition([e.latlng.lat, e.latlng.lng]);
//     onLocationSelect({ lat: e.latlng.lat, lng: e.latlng.lng });
//   };

//   return (
//     <div>
//       <h2>Select Location</h2>
//       <MapContainer
//         center={position}
//         zoom={13}
//         style={{ height: '300px', width: '100%' }}
//         onClick={handleMapClick}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <Marker position={position}>
//           <Popup>Your selected location</Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };

// export default LocationFilter;



// LocationSearch.js

import { MapContainer, TileLayer } from 'react-leaflet';
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-search';

const LocationSearch = ({ onLocationSelect }) => {
  const provider = new OpenStreetMapProvider();

  const handleSearch = (info) => {
    console.log('Location searched:', info);
    onLocationSelect({
      lat: info?.latLng?.lat,
      lng: info?.latLng?.lng,
      address: info?.info?.formattedAddress,
    });
  };

  return (
    <div>
      <h2>Search Location</h2>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <SearchControl
          provider={provider}
          showMarker={true}
          showPopup={false}
          position="topleft"
          zoom={15}
          closeResultsOnClick={true}
          onSearch={handleSearch}
        />
      </MapContainer>
    </div>
  );
};

export default LocationSearch;
