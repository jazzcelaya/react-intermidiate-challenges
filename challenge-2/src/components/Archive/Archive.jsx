import React from 'react';
import { Flex } from '../../styled/Body.styled';
import { NoteCard } from '..';

function Archive({ notes, dispatch }) {
  const notesBody = notes.map((note) => {
    return (
      <NoteCard
        color={note.color}
        title={note.title}
        body={note.body}
        dispatch={dispatch}
        id={note.id}
        type="archived"
      />
    );
  });
  return (
    <Flex flexDirection="column">
      <Flex>{notesBody}</Flex>
    </Flex>
  );
}

export default Archive;
