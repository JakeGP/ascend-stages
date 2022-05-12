import * as React from 'react';
import { useState } from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

import { TabletSize } from '../../models/variables';
import { useScrollPosition } from '../../utils/hooks';

import Image from '../Image';
import Link from '../Link';
import BurgerMenu from '../BurgerMenu';
import DynamicWrapper from '../DynamicWrapper';

import LogoWhite from '../../assets/logos/logo-full-white.png';
import LogoLongWhite from '../../assets/logos/logo-long-white.png';

import { HeaderNavLink, Row } from '../../styles/shared';
import { HEADER_SCROLL_THRESHOLD } from '../../styles/global';
import { HeaderWrapper, HeaderLink, HeaderLogo, HeaderLinksRow, HeaderBurger, HeaderMobile, HeaderMobileBar } from './Header.styles';

enum LinkType {
  Url,
  ID,
}
interface MenuOption {
  title: string;
  link: string;
  type: LinkType;
  bubble?: boolean;
}

const MenuOptions: MenuOption[] = [
  { title: 'HOME', link: '/', type: LinkType.ID },
  { title: 'ABOUT', link: '/about', type: LinkType.ID },
  { title: 'CLIENTS', link: '/clients', type: LinkType.ID },
  { title: 'CONTACT US', link: '/contact-us', type: LinkType.Url, bubble: true },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollY = useScrollPosition();

  // Store menu state
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Store hooks
  const IsTabletOrPhone = useMediaQuery({ query: `(max-width: ${TabletSize.max}px)` });

  // Get hooks values
  const smallHeader = React.useMemo(() => {
    return scrollY > HEADER_SCROLL_THRESHOLD && !IsTabletOrPhone;
  }, [scrollY]);

  // Handle link clicked
  const onLinkClicked = (path: string, type: LinkType) => {
    if (type == LinkType.Url) navigate(path);
    else return; // scroll to id
  };

  return (
    <HeaderWrapper id='header' small={smallHeader}>
      <DynamicWrapper id='header-bar'>
        <Row id='header-bar-inner' between>
          {/* Logo */}
          <HeaderLogo id='header-bar-logo' onClick={() => onLinkClicked(MenuOptions[0].link, LinkType.Url)}>
            {smallHeader ? <Image src={LogoLongWhite} height={'80%'} /> : <Image src={LogoWhite} height={'80%'} />}
          </HeaderLogo>

          {/* Hide links when reached tablet */}
          <MediaQuery minWidth={TabletSize?.max}>
            <HeaderLinksRow id='header-bar-links-navigation'>
              {MenuOptions.map(({ title, link, bubble, type }, index) => {
                const selected = location?.pathname === link;
                return (
                  <HeaderLink key={index} small={smallHeader} selected={selected} onClick={() => onLinkClicked(link, type)} bubble={bubble}>
                    <HeaderNavLink>{title}</HeaderNavLink>
                  </HeaderLink>
                );
              })}
            </HeaderLinksRow>
          </MediaQuery>

          {/* Show burger menu when tablet */}
          <MediaQuery maxWidth={TabletSize?.max}>
            <HeaderBurger id='header-burger-menu'>
              <BurgerMenu open={menuOpen} onPressed={setMenuOpen} />
            </HeaderBurger>
          </MediaQuery>
        </Row>
      </DynamicWrapper>

      {/* Mobile dropdown */}
      <MediaQuery maxWidth={TabletSize.max}>
        <HeaderMobile id='header-mobile' open={menuOpen}>
          {MenuOptions.map(({ title, link, type }, index) => {
            return (
              <HeaderMobileBar key={index} index={index} count={MenuOptions.length} open={menuOpen}>
                <HeaderNavLink onClick={() => onLinkClicked(link, type)}>{title}</HeaderNavLink>
              </HeaderMobileBar>
            );
          })}
        </HeaderMobile>
      </MediaQuery>
    </HeaderWrapper>
  );
};

export default Header;
