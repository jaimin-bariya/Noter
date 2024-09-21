import NoteHead from "./NoteHead";
import DeleteIcon from "/imgs/Menu/bin.gif"


const NotesAll = ({allSavedNotes, setOpenNote, setAllNotes}) => {


  const createNewNote = () => {

    let newNoteNumber = allSavedNotes.length > 0 ? Math.max(...allSavedNotes.map(note => note.id)) + 1 : 1;

    console.log(allSavedNotes.length);
    

    let newNote = {
      id: newNoteNumber,
      content: "",
    }

    setAllNotes((prevnotes) => [newNote, ...prevnotes] )
    setOpenNote(newNote)

  }


  const deleteNote = (id) => {
    setAllNotes(prevnotes => prevnotes.filter(note => note.id !== id));

  };


  //className="border-x-2 border-black mr-1"

  return (
    <>
      <div id="notes" >
          <div id="note-heading" className="border-b-2 border-black flex flex-col items-center">
            <h2 className="font-bold text-center">Your All Notes</h2>
            <button 
              className="mb-5 border-black border-2 px-3 py-1 w-fit rounded hover:bg-orange-400 "
              onClick={createNewNote}
              >Create new note</button>
          </div>

          <ul>

            {allSavedNotes.map((note, index) => (
              // console.log(note['content'].slice(0, 10))

              <li key={index} className="flex flex-col ">
                <button onClick={() => {
                  console.log(index, note);
                  setOpenNote(note)
                  
                }}>
                <NoteHead index={index} content={note['content'].slice(0, 20)} />
                </button>

                <button className="w-10 h-10" onClick={() => deleteNote(note.id)} ><img className="w-10 h-10" src={DeleteIcon} alt="" /></button>

              </li>
            ))}





          </ul>
        </div>
    </>
  );
};

export default NotesAll;