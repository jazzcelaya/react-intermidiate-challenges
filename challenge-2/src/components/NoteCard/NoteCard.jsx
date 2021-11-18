import React from 'react';
import { BiCheck, BiEditAlt, BiArchiveIn } from 'react-icons/bi';
import { StyledColorCircle } from '../../styled/NodeCard';
import { StyledNoteWrapper, StyledInput } from '../../styled/NoteInput';
import { Flex, Button } from '../../styled/Body';

function generateButton(type) {
  if (type === 'create') {
    return (
      <Button>
        Create <BiCheck />
      </Button>
    );
  }
  return (
    <div>
      <Button>
        Update <BiEditAlt />
      </Button>
      <Button>
        Archive <BiArchiveIn />
      </Button>
    </div>
  );
}

function NoteCard({ color, type }) {
  const buttons = generateButton(type);

  return (
    <StyledNoteWrapper background={color}>
      <StyledInput type="text" placeholder="Title" />
      <textarea type="text" placeholder="Take a note..." />
      <Flex>
        <Flex justifyContent="right">
          <StyledColorCircle color="#ffd3b6" />
          <StyledColorCircle color="#ffaaa5" />
          <StyledColorCircle color="#fcf8f3" />
        </Flex>
        {buttons}
      </Flex>
    </StyledNoteWrapper>
  );
}

export default NoteCard;
