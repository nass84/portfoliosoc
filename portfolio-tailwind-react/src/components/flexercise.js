import PinkNav from "./helpers/pinknav";
import { Link } from "react-router-dom";

const Flexercise = () => {
  return (
    <div className="casestudy-container mt-10 flex flex-col md:text-xl ml-10 mr-10 ">
      <PinkNav />
      <div className="flex justify-center lg:ml-10 lg:mr-10">
        <iframe
          className="flex justify-center"
          src="https://docs.google.com/presentation/d/e/2PACX-1vRfysutuxBvgX9f_UnhxplYwMK7Kt1onU-pwiW40zeP_vw-5Ke_DbZcolxRI-9lYKm7RHB4TYLZGimi/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="960"
          height="500"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          title="Flexercise Case Study"
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
};

export default Flexercise;
