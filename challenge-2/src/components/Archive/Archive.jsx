import React from 'react';
import { Flex } from '../../styled/Body';
import { NoteCard } from '..';

function Archive() {
  return (
    <Flex flexDirection="column">
      <h1>Archive</h1>
      <Flex>
        <NoteCard color="#ffaaa5" />
        <NoteCard color="#ffd3b6" />
        <NoteCard color="#fcf8f3" />
        <NoteCard color="#ffaaa5" />
      </Flex>
    </Flex>
  );
}

export default Archive;
