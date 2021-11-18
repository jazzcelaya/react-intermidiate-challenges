import React from 'react';
import { StyledColorCircle } from '../../styled/NodeCard';
import { StyledNoteWrapper, StyledInput } from '../../styled/NoteInput';
import { BiCheck } from 'react-icons/bi';
import { Flex, Button } from '../../styled/Body'

function NoteCard ({color}){
    return (
        <StyledNoteWrapper>
        <StyledInput type="text" placeholder="Title" />
        <textarea type="text" placeholder="Take a note..." />
        <Flex>
        <Flex justifyContent="right">
        <StyledColorCircle color='#ffd3b6'/> 
        <StyledColorCircle color='#ffaaa5'/>
        <StyledColorCircle color='#fcf8f3'/>
        </Flex>
        <Button>Create <BiCheck/></Button>
        </Flex>
      </StyledNoteWrapper>
    )
}

export default NoteCard;