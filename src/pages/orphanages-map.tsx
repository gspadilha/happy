import React, { useMemo } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import dynamic from 'next/dynamic';

import {
  OrphanagesMapContainer,
  OrphanagesMapSidebar,
  SibeBarHeader,
  SibeBarFooter,
  OrphanagesMapCreateOrphanage,
} from '../styles/pages/orphanages-map.module';
import Link from '../foundation/Link';

const OrphanagesMap: React.FC = () => {
  const MyMapLoader = dynamic(() => import('../commons/MyMap'), {
    loading: () => <p>CARREGANDO...</p>,
    ssr: false,
  });

  return (
    <OrphanagesMapContainer>
      <OrphanagesMapSidebar>
        <SibeBarHeader>
          <img src="/images/map-marker.svg" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </SibeBarHeader>

        <SibeBarFooter>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </SibeBarFooter>
      </OrphanagesMapSidebar>

      {
        <MyMapLoader
          position={[-29.953469, -51.1599841]}
          zoom={15}
          textPopup="Lar da Meninas"
        >
          <Link to="open-orphanage" className="open-orphanage">
            <FiArrowRight size="20" color="#ffffff" />
          </Link>
        </MyMapLoader>
      }

      <OrphanagesMapCreateOrphanage
        to="create-orphanage"
        className="create-orphanage"
      >
        <FiPlus size="32" color="#ffffff" />
      </OrphanagesMapCreateOrphanage>
    </OrphanagesMapContainer>
  );
};

export default OrphanagesMap;
