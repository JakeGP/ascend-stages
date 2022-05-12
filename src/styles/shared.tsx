import styled, { css } from 'styled-components';
import { PLATINUM_700, SPACE_XS } from './global';
import { Direction } from '../models/models';

/** FLEX STYLES */
const Row = styled.div<{ noFlex?: boolean; centerH?: boolean; centerV?: boolean; between?: boolean; direction?: Direction }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : Direction.Row)};
  flex: ${(props) => (props.noFlex ? 0 : 1)};

  ${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.centerH &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.centerV &&
    css`
      align-items: center;
    `}
`;
const Column = styled.div<{ centerH?: boolean; centerV?: boolean; between?: boolean; columns?: number; direction?: Direction }>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : Direction.Column)};
  width: ${(props) => 100 / (props.columns ?? 1)}%;

  ${(props) =>
    props.between &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.centerH &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.centerV &&
    css`
      justify-content: center;
    `}
`;

/** TEXT STYLES */
const span = styled.span<{ fontSize?: number; weight?: number; underline?: boolean }>`
  display: inline-flex;
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
  color: ${(props) => props.color ?? 'white'};
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `};
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}pt !important;
    `};
`;

const PageTitle = styled(span)`
  font-size: 30pt;
  font-weight: ${(props) => props.weight ?? 700};
`;
const Quote = styled(PageTitle)`
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
`;
const Heading = styled(span)`
  font-size: 20pt;
  font-weight: ${(props) => props.weight ?? 700};
`;
const Subheading = styled(span)`
  font-size: 18pt;
  font-weight: ${(props) => props.weight ?? 400};
  margin-bottom: ${SPACE_XS}px;
`;
const Title = styled(span)`
  font-size: 16pt;
  font-weight: ${(props) => props.weight ?? 400};
`;
const Subtitle = styled(span)`
  font-size: 14pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const Paragraph_1 = styled(span)`
  font-size: 12pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const Paragraph_2 = styled(span)`
  font-size: 8pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const Caption = styled(span)`
  font-size: 8pt;
  font-weight: ${(props) => props.weight ?? 300};
`;
const HeaderNavLink = styled(span)`
  font-size: 8pt;
  font-weight: ${(props) => props.weight ?? 700};
  z-index: 1;
`;

export { Row, Column };
export { Quote, PageTitle, Heading, Subheading, Title, Subtitle, Paragraph_1, Paragraph_2, HeaderNavLink, Caption };
