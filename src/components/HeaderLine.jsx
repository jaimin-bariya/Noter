import jpLogo from "/imgs/jp.png"
import jpVector from "/imgs/jpvector.png"

import { useState } from "react";




const HeaderLine = () => {


  const [hovered, setHovered] = useState(false)

  return (
    <>

        <div id="header-line" className="border-y-2 border-black w-full h-10 flex justify-center items-center gap-2"


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

        </div>
      
    </>
  );
};

export default HeaderLine;