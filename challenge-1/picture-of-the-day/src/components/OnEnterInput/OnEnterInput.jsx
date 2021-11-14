import React from 'react';
import { Input, Flex } from '../../atoms';

const OnEnterInput = ({ placeholder, functionality }) => {
  const handleChange = (e) => {
    if (e.key === 'Enter') {
      functionality(e.target.value);
    }
  };
  return (
    <Flex>
      <Input placeholder={placeholder} onKeyPress={handleChange} borderStyle="none" />
    </Flex>
  );
};

export default OnEnterInput;
