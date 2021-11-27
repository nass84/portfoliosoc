import PinkNav from "./helpers/pinknav";
import { Link } from "react-router-dom";

const Rebel = () => {
  return (
    <div className="casestudy-container mt-10 flex flex-col md:text-xl ml-10 mr-10 ">
      <PinkNav />
      <div className="flex justify-center lg:ml-10 lg:mr-10 ">
      <iframe className="flex justify-center"
           
            src="https://www.beautiful.ai/embed/-MpWOq8tP4KjOPuPm7ZC?utm_source=beautiful_player&utm_medium=embed&utm_campaign=-MomWHyNroQ-XFosvm8r"
            title="Rebel Badge Club"
            frameborder="0"
            width="960"
            height="500"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
     

      <Link to="/casestudies">
        <button
          className="back-button mt-10 mb-10 lg:mt-2 lg:mb-2"
          type="button"
        >
          Back
        </button>
      </Link>
    </div>
  );
};

export default Rebel;
