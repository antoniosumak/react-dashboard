import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderInner,
  LogoTekst,
  Nav,
  NavItems,
  NavList,
  Hamburger,
  HamburgerLine,
  HamburgerMenu,
} from './HeaderStyles';
import { AccentSpan } from '../../lib/styles/generalStyles';

const Header = () => {
  const [navigationOpened, setIsOpened] = useState(false);
  const links = [
    { link: 'Corona API', path: '/' },
    { link: 'Dashboard 2', path: '/dashboard' },
  ];
  return (
    <HeaderContainer>
      <HeaderInner>
        <LogoTekst>
          Antonio<AccentSpan>Sumak</AccentSpan>
        </LogoTekst>
        <Nav>
          <NavList>
            {links.map((value, index) => (
              <NavItems key={index} to={value.path}>
                {value.link}
              </NavItems>
            ))}
          </NavList>
        </Nav>
        <Hamburger onClick={() => setIsOpened(!navigationOpened)}>
          <HamburgerLine navigationOpened={navigationOpened} />
          <HamburgerLine navigationOpened={navigationOpened} />
          <HamburgerLine navigationOpened={navigationOpened} />
        </Hamburger>
      </HeaderInner>

      <HamburgerMenu navigationOpened={navigationOpened}>
        {links.map((value, index) => (
          <NavItems key={index} to={value.path}>
            {value.link}
          </NavItems>
        ))}
      </HamburgerMenu>
    </HeaderContainer>
  );
};

export default Header;
