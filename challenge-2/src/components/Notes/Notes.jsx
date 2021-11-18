import React from 'react';
import { Flex } from '../../styled/Body';
import { NoteCard } from '..';

function Notes() {
  return (
    <Flex flexDirection="column">
      <NoteCard type="create" />
      <Flex>
        <NoteCard color="#ffaaa5" type="update" />
        <NoteCard color="#ffd3b6" />
        <NoteCard color="#fcf8f3" />
        <NoteCard color="#ffaaa5" />
      </Flex>
    </Flex>
  );
}

export default Notes;
