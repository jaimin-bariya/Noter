import ClearIcon from "/imgs/Menu/broom.png";
import SaveIcon from "/imgs/Menu/safe-box.gif";
import { isValidElement, useEffect, useState } from "react";

const OpenNote = ({ note, setAllNotes }) => {
  const [currentNote, setCurrentNote] = useState(note.content);

  const handleTextAreaChanges = (event) => {
    const updatedContent = event.target.value;
    setCurrentNote(updatedContent);

    if (note && note.id !== undefined) {
      setAllNotes((prevNotes) =>
        prevNotes.map((n) =>
          n.id === note.id ? { ...n, content: updatedContent } : n
        )
      );
    }
  };

  // Effect to handle setting currentNote when the note changes
  useEffect(() => {
    if (note && note.content !== undefined) {
      setCurrentNote(note.content);
    } else {
      setCurrentNote(""); // Set to empty string if no note or content is undefined
    }
  }, [note]);

  // Effect to save updated note to localStorage
  useEffect(() => {
    // console.log("change in current node");

    if (note && note.id !== undefined) {
      // console.log("indies ");

      const updatedNotes = JSON.parse(localStorage.getItem("allnotes")) || [];
      console.log(note.id);

      const noteToUpdate = updatedNotes.map((n) =>
        n.id === note.id ? { ...n, content: currentNote } : n
      );
      console.log(noteToUpdate);

      localStorage.setItem("allnotes", JSON.stringify(noteToUpdate));
    }
  }, [currentNote, note]);

  // const saveThisNote = (note) => {
  //   setAllNotes(prevnotes => [{id: Date, content:note}, ...prevnotes])
  // }

  const CleanMyNote = () => {
    setCurrentNote("");
  };

  return (

    

    <>

      

      <div className="" style={{ height: "93%", width: "1140px" }}>
        <div
          id="onpostbtns"
          className="w-full mt-2  flex flex-row gap-2 justify-end"
        >
          <button className="h-10 w-10" onClick={CleanMyNote}>
            <a>
              <img src={ClearIcon} alt="Clear all" />
            </a>
          </button>
          <button className="h-10 w-10">
            <a>
              <img src={SaveIcon} alt="Save this note" />
            </a>
          </button>
        </div>

        <textarea
          className="h-full w-full p-10 border-none"
          placeholder="Start from here..."
          value={currentNote}
          onChange={handleTextAreaChanges}
        ></textarea>
      </div>
    </>
  );
};

export default OpenNote;
