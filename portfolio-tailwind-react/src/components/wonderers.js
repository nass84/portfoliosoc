import PinkNav from "./helpers/pinknav";
import { Link } from "react-router-dom";

export default function Wonderers() {
  return (
    <div className="casestudy-container mt-10 flex flex-col md:text-xl ml-10 mr-10 ">
      <PinkNav />
      <div className="flex justify-center lg:ml-10 lg:mr-10 ">
      <iframe className="flex justify-center"
          src="https://docs.google.com/presentation/d/e/2PACX-1vR4cd6_c5Vv_nw0Jq0oT2TL_jDURsV7dnywl2bsqgzTUdZbTZkY2bg1ap_E7HsQzgyPpWEzsQGID7g4/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="wonderers case study"
        ></iframe>
      </div>

      
      <Link to="/casestudies">
        <button
          className="back-button mt-5 mb-10 "
          type="button"
        >
          Back
        </button>
      </Link>
    </div>
  );
}
