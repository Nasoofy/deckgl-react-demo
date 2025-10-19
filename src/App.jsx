import React from 'react';
import { DeckGL } from '@deck.gl/react';
import { Map} from 'react-map-gl/maplibre';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
const DATA_URL  =  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json';

const MAP_STYLE= 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

const INTIAL = {
  longitude: -73.9851,
  latitude: 40.7589,
  zoom: 9,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};


function App(){
  const layers =[
    new HeatmapLayer({
      id: 'heatmapLayer',
      data: DATA_URL,
      getPosition: d => [d[0], d[1]],
      getWeight: d => 1,
      radiusPixels: 30,
      intensity: 1,
      threshold: 0.83
    })
  ];
  return (
    <DeckGL 
      initialViewState={INTIAL}
      controller={true}
      layers={layers}
    >
      <Map reuseMaps mapStyle={MAP_STYLE}/>  
    </DeckGL>
  );
}
export default App;