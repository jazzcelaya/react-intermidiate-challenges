import React from 'react';
import { Flex } from '../../styled/Body.styled';
import { NoteCard } from '..';

function Archive({ notes, dispatch }) {
  const notesBody =
    notes.length > 0 ? (
      notes.map((note) => {
        return (
          <NoteCard
            color={note.color}
            title={note.title}
            body={note.body}
            dispatch={dispatch}
            id={note.id}
          />
        );
      })
    ) : (
      <p>You don&apos;t have archived notes.</p>
    );
  return (
    <Flex flexDirection="column">
      <Flex>{notesBody}</Flex>
    </Flex>
  );
}

export default Archive;
