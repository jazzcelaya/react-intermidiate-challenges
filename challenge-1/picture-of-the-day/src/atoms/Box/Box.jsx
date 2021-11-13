import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  gridGap,
  layout,
  position,
  shadow,
  space,
  typography,
  alignItems,
} from 'styled-system';

const Box = styled.div`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${gridGap}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${typography}
  ${alignItems}
  box-sizing: border-box;
  scrollbar-width: none;
`;

export default Box;
