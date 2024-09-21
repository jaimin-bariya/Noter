import jpLogo from "/imgs/jp.png"
import jpVector from "/imgs/jpvector.png"
import GitHubIcon from "/imgs/Menu/github.png"
import LinkedInIcon from "/imgs/Menu/linkedin.png"

import { useState } from "react";




const HeaderLine = () => {


  const [hovered, setHovered] = useState(false)

  return (
    <>

        <div id="header-line" className="border-y-2 border-black w-full h-10 flex justify-between px-4 items-center gap-2"


        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        >

           

            <img 
              src={jpLogo} 
              className="h-8 w-8" 
              />

            {hovered && (
              <div className="">
                Hey Buddy 😅 -&gt; Star this project on github
              </div>
            )}



            <div className="flex gap-2 flex-row">
              
              <a href="https://github.com/jaimin-bariya/Noter" target="_blank"><img src={GitHubIcon} className="h-8 w-8" alt="" /></a>
              
              <a href="https://www.linkedin.com/in/jaiminbariya/" target="_blank" ><img src={LinkedInIcon} className="h-8 w-8" alt="" /></a>
            </div>

        </div>
      
    </>
  );
};

export default HeaderLine;