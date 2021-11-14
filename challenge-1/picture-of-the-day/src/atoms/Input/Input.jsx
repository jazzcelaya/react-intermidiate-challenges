import styled from 'styled-components';
import Flex from '../Box/Box';

const Input = styled(Flex)`
  line-height: 24px;
  font-size: 16px;
`;

Input.defaultProps = {
  as: 'input',
  textAlign: 'center',
};

export default Input;
