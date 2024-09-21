import ClearIcon from "/imgs/Menu/broom.png";
import SaveIcon from "/imgs/Menu/safe-box.gif";
import { isValidElement, useEffect, useState } from "react";
import { jsPDF } from 'jspdf'

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




  useEffect(() => {
    if (note && note.content !== undefined) {
      setCurrentNote(note.content);
    } else {
      setCurrentNote("");
    }
  }, [note]);




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




  const CleanMyNote = () => {
    setCurrentNote("");
  };


  // const handleSave = () => {
  //   const doc = new jsPDF();
  //   doc.text(currentNote, 10, 10); 
  //   doc.save('document.pdf'); 
  // };

  const handleSave = () => {
    const doc = new jsPDF();
    const margin = 10; // Margin from the edges
    const pageWidth = doc.internal.pageSize.getWidth() - margin * 2;

    // Split text into paragraphs based on double newlines
    const paragraphs = content.split('\n\n'); // Split by two newlines
    let cursorY = margin; // Initial Y position

    paragraphs.forEach((paragraph) => {
      // Split each paragraph into lines that fit within the page width
      const splitText = doc.splitTextToSize(paragraph, pageWidth);

      // Add each line of the paragraph to the PDF
      splitText.forEach((line) => {
        doc.text(line, margin, cursorY);
        cursorY += 7; // Line height
      });

      // Add extra space between paragraphs
      cursorY += 10; // Space after paragraph
    });

    doc.save('document.pdf');
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
          <button className="h-10 w-10" onClick={handleSave}>
            <a>
              <img src={SaveIcon} alt="Save this note" />
            </a>
          </button>
        </div>

        <textarea
          className="h-full w-full p-10 border-none resize-none"
          placeholder="Start from here..."
          value={currentNote}
          onChange={handleTextAreaChanges}
        ></textarea>
      </div>
    </>
  );
};

export default OpenNote;
