import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [noteTitle, setTitle] = useState("");
  const [noteText, setText] = useState("");
  const [expansion, setexpansion] = useState(false);

  function HandleChangeTitle(event) {
    setTitle(event.target.value);
  }
  function HandleChangeText(event) {
    setText(event.target.value);
  }

  function submitNote(event) {
    props.Addit(noteTitle, noteText);
    setTitle("");
    setText("");
    event.preventDefault();
  }
  function expand() {
    setexpansion(true);
  }

  return (
    <div>
      <form className="create-note">
        {expansion && (
          <input
            onChange={HandleChangeTitle}
            name="title"
            placeholder="Title"
            value={noteTitle}
          />
        )}
        <textarea
          onChange={HandleChangeText}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={expansion ? "3" : "1"}
          value={noteText}
        />
        <Zoom in={expansion}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
