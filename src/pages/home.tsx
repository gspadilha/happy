import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import Logo from '../commons/Logo';

import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeLocation,
  HomeEnterApp,
} from '../styles/pages/home.module';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Logo />

        <HomeTitle>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </HomeTitle>

        <HomeLocation>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </HomeLocation>

        <HomeEnterApp className="orphanages-map" to="orphanages-map">
          <FiArrowRight color="rgba(0, 0, 0, 0.6)" size="26" />
        </HomeEnterApp>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
