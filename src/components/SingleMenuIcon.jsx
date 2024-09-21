import { useState } from "react";


const SingleMenuIcon = ({Icon, SetText, TextOfIcon, SetBGColor}) => {

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseOver = () => {
        setIsHovered(true);
        SetBGColor(true)
    }

    const handleMouseOut = () => {
        setIsHovered(false);
        SetText("")
        SetBGColor(false)
    }



  return (
    <>
      
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <a href=""><img src={Icon} alt="" /></a>


        {isHovered && <span className="tooltip"> {SetText(TextOfIcon)}</span>}
      </div>

    </>
  );
};

export default SingleMenuIcon;