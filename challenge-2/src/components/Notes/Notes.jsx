import React from 'react';
import { Flex } from '../../styled/Body.styled';
import { NoteCard } from '..';

function Notes({ notes, dispatch }) {
  const notesBody = notes.map((note) => {
    return (
      <NoteCard
        color={note.color}
        title={note.title}
        body={note.body}
        dispatch={dispatch}
        id={note.id}
      />
    );
  });
  return (
    <Flex flexDirection="column">
      <NoteCard type="create" dispatch={dispatch} />
      <Flex>{notesBody}</Flex>
    </Flex>
  );
}

export default Notes;
