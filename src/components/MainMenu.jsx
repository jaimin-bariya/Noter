import HomeIcon from "/imgs/Menu/house.gif"
import NotesIcon from "/imgs/Menu/settings.gif"
import SettingsIcon from "/imgs/Menu/notes.gif"
import { useState } from "react";
import SingleMenuIcon from "./SingleMenuIcon";


const MainMenu = () => {

    const [Text, SetText] = useState("")
    const [BGColor, SetBGColor] = useState(false)

  return (
    <>

        <div id="main-menu" className="flex flex-col" >
            <ul>
                <li> <SingleMenuIcon Icon={HomeIcon} SetText={SetText} TextOfIcon={"Home"} SetBGColor={SetBGColor} />  </li>
                <li> <SingleMenuIcon Icon={NotesIcon} SetText={SetText} TextOfIcon={"Notes"} SetBGColor={SetBGColor} /> </li>
                <li> <SingleMenuIcon Icon={SettingsIcon} SetText={SetText} TextOfIcon={"Setting"} SetBGColor={SetBGColor} /> </li>
           
            </ul>

            <div className={` ${BGColor ? 'bg-orange-400' : ''} h-full   flex flex-col justify-center `}>

              <h2 className=" transform -rotate-90"  >{Text}</h2>
            
            </div>

        </div>

    </>
  );
};

export default MainMenu;