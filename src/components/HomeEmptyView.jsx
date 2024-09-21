import lightIcon from "/imgs/imgP/light3.jpeg";
import NWIcon from "/imgs/imgP/arrow.png";

const HomeEmptyView = () => {
  return (
    <>
      <div className="w-screen max-w-max h-96 flex  justify-center items-center flex-row ml-10 mt-10 space-x-4">
        <img className="h-32 w-32 " src={NWIcon} alt="" />
        <img src={lightIcon} alt="Light Icon" className="h-96 w-96  ml-26 mt-72" /> 
        <div className="mt-10 ml-20 w-"> 
          <ul className="list-disc list-inside ml-20">
            <li>Minimalistic note taking app.</li>
            <li>No sign up, No log in.</li>
            <li>Safe and secure.</li>
            <li>Everything will be saved on your browser.</li>
            <li>Made by developers 👨‍💻 for all.</li>
            <li>Happy Learning :) </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeEmptyView;
