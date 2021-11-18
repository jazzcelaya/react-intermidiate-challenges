import React from "react";
import { StyledNoteWrapper, StyledInput } from '../../styled/NoteInput';
import { StyledColorCircle } from '../../styled/NodeCard';
import { Flex, Button } from '../../styled/Body'
import { NoteCard } from "..";
import { BiCheck } from 'react-icons/bi';

function Notes (){
    return(
        <Flex flexDirection="column">
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
      <Flex>
        <NoteCard color='#ffaaa5'/>
        <NoteCard color='#ffd3b6' />
        <NoteCard color='#fcf8f3' />
        <NoteCard color='#ffaaa5' />
      </Flex>
      </Flex>
    )
}

export default Notes;
