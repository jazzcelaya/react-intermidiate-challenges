import styled from 'styled-components';
import Box from '../Box/Box';

const Flex = styled(Box)`
  scrollbar-width: none;
`;

Flex.defaultProps = {
  display: 'flex',
  textAlign: 'center',
  flexDirection: 'column',
};

export default Flex;
