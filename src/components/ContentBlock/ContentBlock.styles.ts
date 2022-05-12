import styled from "styled-components";
import { ContentBlockProps } from "./ContentBlock";

interface BlockProps extends ContentBlockProps {
  screenHeight: number;
}

const Block = styled.div<BlockProps>`
  position: relative;
  display: flex;
  padding-top: ${props => props.paddingTop ?? 0}px;
  padding-bottom: ${props => props.paddingBot ?? 0}px;
  
  ${props => props.backgroundColor && {
    backgroundColor: props.backgroundColor,
  }};

  ${props => props.fill && {
    minHeight: `${props.screenHeight}px`,
    maxHeight: `${props.screenHeight}px`,
  }};
`;

export { Block };