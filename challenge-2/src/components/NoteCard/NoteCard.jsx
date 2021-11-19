import React, { useState, useEffect } from 'react';
import { BiCheck, BiSave, BiArchiveIn, BiUndo } from 'react-icons/bi';
import { StyledColorCircle } from '../../styled/NoteCard.styled';
import { StyledNoteWrapper, StyledInput } from '../../styled/NoteInput.styled';
import { Flex, Button } from '../../styled/Body.styled';

function NoteCard({ color, type, title, body, dispatch, id, isArchived }) {
  const [backgroundColor, setbackgroundColor] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  useEffect(() => {
    setbackgroundColor(color);
    setNoteTitle(title);
    setNoteBody(body);
  }, [color, title, body]);

  const handleCreate = () => {
    const newNote = {
      color: backgroundColor,
      title: noteTitle,
      body: noteBody,
      isArchived: false,
      id: Date.now(),
    };
    dispatch({ type: 'add', payload: newNote });
    setNoteTitle('');
    setNoteBody('');
    setbackgroundColor('');
  };

  const handleArchive = () => {
    const archivedNote = {
      color: backgroundColor,
      title: noteTitle,
      body: noteBody,
      isArchived,
      id,
    };
    dispatch({ type: 'archive', payload: archivedNote });
  };

  const handleTitle = (e) => {
    e.preventDefault();
    setNoteTitle(e.target.value);
  };

  const handleNoteBody = (e) => {
    e.preventDefault();
    setNoteBody(e.target.value);
  };

  function generateButtons(cardType) {
    if (cardType === 'create') {
      return (
        <Button onClick={handleCreate}>
          Create <BiCheck />
        </Button>
      );
    }
    if (cardType === 'archived') {
      return (
        <Button onClick={handleArchive}>
          <BiUndo />
        </Button>
      );
    }
    return (
      <div>
        <Button>
          <BiSave />
        </Button>
        <Button onClick={handleArchive}>
          <BiArchiveIn />
        </Button>
      </div>
    );
  }

  const buttons = generateButtons(type);

  return (
    <StyledNoteWrapper background={backgroundColor}>
      <StyledInput
        type="text"
        placeholder="Title"
        value={noteTitle}
        onChange={handleTitle}
      />
      <textarea
        type="text"
        placeholder="Take a note..."
        value={noteBody}
        onChange={handleNoteBody}
      />
      <Flex>
        <Flex justifyContent="right">
          <StyledColorCircle
            color="#ffd3b6"
            onClick={() => setbackgroundColor('#ffd3b6')}
          />
          <StyledColorCircle
            color="#ffaaa5"
            onClick={() => setbackgroundColor('#ffaaa5')}
          />
          <StyledColorCircle color="white" onClick={() => setbackgroundColor('white')} />
        </Flex>
        {buttons}
      </Flex>
    </StyledNoteWrapper>
  );
}

export default NoteCard;
