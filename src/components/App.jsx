import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notelist, setList] = useState([]);

  function AddNote(noteTitle, noteText) {
    const yoyo = {
      title: noteTitle,
      text: noteText
    };
    setList((prevTitles) => {
      return [...prevTitles, yoyo];
    });
  }

  function deleteItem(id) {
    setList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea Addit={AddNote} />
      {notelist.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.text}
            onChecked={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
