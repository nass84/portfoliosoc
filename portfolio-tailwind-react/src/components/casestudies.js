import { Link } from "react-router-dom";
import PinkNav from "./helpers/pinknav";
import Rebel from "../images/rebel.png";
import Flexlogo from "../images/flexlogo.png";
import Wonderlogo from "../images/wonderwhy.png";

export default function Casestudies() {
  return (
    <div>
      <PinkNav />
      <h1 className="casestudy text-left flex flex-row mt-5 mb-10 ml-10 text-primary text-4xl font-bold md:ml-10 flex-">
        UX - Case Studies
      </h1>
      <div className=" flex mt-20 ml-10 mr-10 flex-col xl:flex-row ">
        <Link to="/rebel">
          <button className=" hover:bg-primary text-left bg-white  hover:text-white text-primary p-10 font-bold text-lg 2xl:text-xl rounded-xl  border-2 hover:border-white border-primary md:w-3/4 shadow-2xl mb-5">
            UX Case Study: {<br></br>} {<br></br>} Design a website to encourage
            adults to track and record the new activities they try
            <img
              src={Rebel}
              className="flex-grow-0 rounded-lg w-2/4 xl:w-3/4  h-auto flex m-auto mt-5"
              alt="rebel logo"
            />
          </button>
        </Link>

        <Link to="/flexercise">
          <button className=" hover:bg-primary text-left bg-white  hover:text-white text-primary p-10 font-bold text-lg 2xl:text-xl rounded-xl  border-2 hover:border-white border-primary md:w-3/4 shadow-2xl mb-5">
            UX Case Study: {<br></br>} {<br></br>} Design a fitness app for
            people who want to make exercise more enjoyable
            <img
              src={Flexlogo}
              className=" flex-grow-0 rounded-lg w-2/4 xl:w-3/4 h-auto flex m-auto mt-5"
              alt="flex logo"
            />
          </button>
        </Link>
        <Link to="/wonderers">
          <button className=" hover:bg-primary text-left bg-white  hover:text-white text-primary p-10 font-bold text-lg 2xl:text-xl rounded-xl  border-2 hover:border-white border-primary md:w-3/4 shadow-2xl mb-5">
            UX Case Study: {<br></br>} {<br></br>} How can we encourage and
            reward children for positive development in their everyday lives?
            <img
              src={Wonderlogo}
              className="flex-grow-0 rounded-lg w-2/4 xl:w-3/4 h-auto flex m-auto mt-5"
              alt="wonder logo"
            />
          </button>
        </Link>
      </div>
      <Link to="/">
        <button
          className="back-button mt-10 mb-10 lg:mt-2 lg:mb-2"
          type="button"
        >
          Back
        </button>
      </Link>
    </div>
  );
}
