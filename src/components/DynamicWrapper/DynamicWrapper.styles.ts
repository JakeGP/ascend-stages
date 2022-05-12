import { MinMax } from "src/models/models";
import styled, { css } from "styled-components";

const DynamicContainer = styled.div<{ minMax: MinMax | undefined, padding: number | undefined }>`
  position: relative;
  display: inherit;
  flex: 1;
  height: 100%;
  min-width: ${props => (props.minMax?.min - props.padding * 2) ?? 0}px;
	max-width: ${props => props.minMax?.max ?? 0}px;
  padding-left: ${props => props.padding}px;
  padding-right: ${props => props.padding}px;

  ${props => props.color && css`
    background-color: ${props.color};
  `}
`;

export { DynamicContainer };