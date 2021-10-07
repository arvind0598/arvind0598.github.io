import { CSSProperties } from 'react';
import { Paragraph } from 'grommet';

export const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
  lineHeight: isDesktop ? '2em' : '1.5em',
});

export const renderData = (isDesktop: boolean, line: string, index: number) => (
  <Paragraph style={getParagraphStyles(isDesktop)} key={index} fill>
    { line }
  </Paragraph>
);
