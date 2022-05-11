import * as React from 'react';
import { useMemo, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../../utils/hooks';
import { TabletSize } from '../../models/variables';
import { GOOGLE_MAPS_URL } from '../../models/constants';

import Link from '../Link';
import Image from '../Image';
import DynamicWrapper from '../DynamicWrapper';

import { Column, Caption, Paragraph_1, Title, Row } from '../../styles/shared';
import { SPACE_S } from '../../styles/global';
import { FooterSegment, FooterSegmentWrapper, FooterWrapper } from './Footer.styles';

type FooterProps = {
  color: string;
  noShadow?: boolean;
};

const Footer = (props: FooterProps) => {
  const { color, noShadow } = props;

  const screenSize = useWindowSize();
  const IsTabletOrPhone = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });
  const [isShorterThanScreen, setIsShorterThanScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsShorterThanScreen(document.body.clientHeight < screenSize.height);
  }, [document.body.clientHeight, screenSize]);

  return (
    <FooterWrapper id='footer' fixed={isShorterThanScreen} noShadow={noShadow} color={color}>
      <DynamicWrapper>
        <Column>
          <FooterSegmentWrapper padding={{ top: SPACE_S, bottom: SPACE_S }} tabletOrPhone={IsTabletOrPhone}></FooterSegmentWrapper>

          <FooterSegmentWrapper padding={{ top: 4, bottom: 4 }} hide={IsTabletOrPhone}>
            <Caption weight={700}>&copy; Ascend Stages {new Date().getFullYear()}</Caption>
            <Caption weight={700}>
              Website designed by&nbsp;
              <Link url='https://www.newblankpage.co.uk'>
                <Caption underline weight={800}>
                  NewBlankPage
                </Caption>
              </Link>
            </Caption>
          </FooterSegmentWrapper>
        </Column>
      </DynamicWrapper>
    </FooterWrapper>
  );
};

export default Footer;
