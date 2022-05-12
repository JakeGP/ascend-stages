import styled, { css } from "styled-components";
import { HEADER_HEIGHT, HEADER_HEIGHT_SMALL, RED_PRIMARY, RED_SECONDARY, SPACE_M } from "../../styles/global";
import { PageTitle } from "../../styles/shared";
 
const HeaderWrapper = styled.div<{ small: boolean; shadow?: boolean; }>`
  position: fixed;
  top: 0px;
  z-index: 999;

	display: flex;
  align-items: center;
	justify-content: center;
  width: 100%;
  height: ${props => props.small ? HEADER_HEIGHT_SMALL : HEADER_HEIGHT}px;
  transition: .4s;
  background-color: black;
  overflow: visible;
  ${props => props.shadow && css`
    box-shadow: 0px 10px 10px 4px rgb(0 0 0 / 30%);
  `};
`;
  
const HeaderLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
	justify-content: flex-start;
  max-width: 70%;
  cursor: pointer;
`;

const HeaderLinksRow = styled.div<{ hide?: boolean }>`
  display: flex;
  align-items: center;
	justify-content: flex-end;
  width: 100%;
  opacity: ${props => props.hide ? 0 : 1};
  transition: .4s;
`;

const HeaderLink = styled.div<{ small?: boolean; selected?: boolean; bubble?: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-left: ${SPACE_M}px;
  padding-right: ${SPACE_M}px;
  background-color: ${props => props.bubble ? RED_PRIMARY : 'unset'};
  height: ${props => props.small ? '100%' : '50%'};
  cursor: pointer;
  
  ::before {
    content: '';
    position: absolute;
    bottom: ${props => props.selected ? 0 : '50%'};
    left: ${props => props.selected ? 0 : '50%'};
    width: ${props => props.selected ? '100%' : 0};
    height: ${props => props.selected ? '2px' : 0};
    transform: ${props => props.selected ? 'unset' : 'translate(-50%, 50%)'};
    background: ${props => props.bubble ? RED_SECONDARY : RED_PRIMARY};
    transition: width .4s, height .6s;
  }

  :hover::before {
    height: 100%;
    width: 100%;
  }
`;

const HeaderBurger = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

const HeaderMobile = styled.div<{ open: boolean }>`
  position: fixed;
  pointer-events: ${props => props.open ? 'all' : 'none'};
  top: 0;
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT}px);
  padding-top: ${HEADER_HEIGHT}px;
  transition: .4s;
  z-index: 9;

  display: flex;
  flex-direction: column;
`;

const HeaderMobileBar = styled.div<{ index: number, count: number; open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => 100 / props?.count}%;
  transform: ${props => `translateY(-${100 * (props.index + 2)}%)`};
  transition: .4s ${props => (props.count - props.index) * .1}s;
  z-index: ${props => props.count - props.index};
  
  ${props => props.open && css`
    transition: .4s ${props.index * .1}s;
    transform: translateY(0%);
  `}
`;

export { 
  HeaderWrapper, 
  HeaderLogo,
  HeaderLinksRow, 
  HeaderLink,
  
  HeaderBurger,
  HeaderMobile,
  HeaderMobileBar,
 };