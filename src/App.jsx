import { useEffect, useState } from "react";
import "./App.css";
import NotesAll from "./components/NotesAll";
import HeaderLine from "./components/HeaderLine";
import MainMenu from "./components/MainMenu";
import OpenNote from "./components/OpenNote";
import HomeEmptyView from "./components/HomeEmptyView";

const initialNote = {id:0, content: ""}


function App() {
  const [count, setCount] = useState(0);
  const [allNotes, setAllNotes] = useState([])  
  const [openNote, setOpenNote] = useState(initialNote)


  

  useEffect(() => {
    const oldNotes = JSON.parse(localStorage.getItem('allnotes'));
  
    if (oldNotes && oldNotes.length > 0) {
      setAllNotes(oldNotes);
      setOpenNote(oldNotes[0]);  // Open the first note from localStorage
    } 
    
    // else {
    //   console.log("No notes found, initializing with default note");
    //   setAllNotes([initialNote]);
    //   setOpenNote(initialNote);  // Open the initialNote only if no notes found
    // }
  }, []);
  

  // useEffect(() => {
  //   if (allNotes.length > 0) {
  //     localStorage.setItem('allnotes', JSON.stringify(allNotes));
  //     console.log("Notes saved to localStorage", allNotes);
  //   }
  // }, [allNotes]);  // This will save to localStorage every time allNotes changes
  

 

  useEffect(() => {
    localStorage.setItem('allnotes', JSON.stringify(allNotes))
  }, [allNotes])








  return (
    <>

    
      <HeaderLine />

      <div id="web-body">

        
        <MainMenu />

        <div id="resizer" ></div>

        

        <NotesAll allSavedNotes={allNotes} setOpenNote={setOpenNote} setAllNotes={setAllNotes} />

        <div id="resizer" ></div>

        <div id="open-note">

          {allNotes.length === 0 ? <HomeEmptyView /> : <OpenNote note={openNote} setAllNotes={setAllNotes} />  }
        
        
          
          
        </div>
      </div>
    </>
  );
}

export default App;
