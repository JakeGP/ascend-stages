import * as React from 'react';

import { useWindowSize } from '../../utils/hooks';

import DynamicWrapper from '../DynamicWrapper';
import { Block } from './ContentBlock.styles';

export interface ContentBlockProps {
  id?: string;
  backgroundColor?: string;
  paddingTop?: number;
  paddingBot?: number;
  fill?: boolean;
}

const ContentBlock = (props: React.PropsWithChildren<ContentBlockProps>) => {
  const windowSize = useWindowSize();

  return (
    <Block {...props} screenHeight={windowSize.height}>
      <DynamicWrapper>{props.children}</DynamicWrapper>
    </Block>
  );
};

export default ContentBlock;
