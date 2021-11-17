import React from "react";
import { NoteInput } from '../../styled/NoteInput';
import { NoteCard } from "..";

function Notes (){
    return(
        <div>
        <NoteInput>
      <input type="text" placeholder="Title" />
        <input type="text" placeholder="Take a note..." />
      </NoteInput>
      <div>
        <NoteCard />
        <NoteCard />
      </div>
      </div>
    )
}

export default Notes;
