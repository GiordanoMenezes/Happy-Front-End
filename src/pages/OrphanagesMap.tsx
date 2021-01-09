import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaPlus, FaArrowRight } from 'react-icons/fa';

import mapMarkerImg from "../images/mapmarker.svg";
import "../styles/pages/orphanages-map.css";

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import MapIcon from '../utils/MapIcon';
import api from '../services/api';

interface Orphanage {
  id: number,
  latitude: number,
  longitude: number,
  nome: string,
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Juazeiro do Norte</strong>
          <span>Ceará</span>
        </footer>
      </aside>
      <Map center={[-7.2285921, -39.3241769]} zoom={14} style={{ width: '100%', height: '100%' }}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {orphanages.map(orphanage => {
          return (
            <Marker key={orphanage.id} position={[orphanage.latitude, orphanage.longitude]} icon={MapIcon}>
              <Popup closeButton={false} minWidth={150} maxWidth={150} className='mapPopup'>
                {orphanage.nome}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FaArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>



      <Link to="/orphanages/create" className="create-orphanage">
        <FaPlus size={28} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;