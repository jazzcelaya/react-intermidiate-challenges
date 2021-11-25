import React from 'react';
import { Flex } from '../../styled/Body.styled';
import { NoteCard } from '..';

function Notes({ notes, dispatch }) {
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
      <p>There are no notes; please create a new one using the creation note input.</p>
    );
  return (
    <Flex data-testid="notes" flexDirection="column">
      <NoteCard type="create" dispatch={dispatch} />
      <Flex>{notesBody}</Flex>
    </Flex>
  );
}

export default Notes;
