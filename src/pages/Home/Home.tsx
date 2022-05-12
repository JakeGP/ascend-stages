import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Direction } from '../../models/models';
import { TabletSize } from '../../models/variables';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentBlock from '../../components/ContentBlock';

import { SPACE_XL, HEADER_HEIGHT, RED_SECONDARY } from '../../styles/global';
import { Wrapper } from './Home.styles';

const Home = () => {
  const navigate = useNavigate();

  const headerOffset = HEADER_HEIGHT + SPACE_XL;
  const IsTablet = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  const direction = IsTablet ? Direction.Column : Direction.Row;
  const columns = IsTablet ? 1 : 2.1;

  return (
    <Wrapper id='wrapper'>
      <Header />
      <ContentBlock id='/' fill />
      <ContentBlock id='/about' fill backgroundColor={RED_SECONDARY} />
      <ContentBlock id='/' fill />
      <ContentBlock fill backgroundColor={RED_SECONDARY} />
      <Footer />
    </Wrapper>
  );
};

export default Home;
