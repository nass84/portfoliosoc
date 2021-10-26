import PinkNav from "./helpers/pinknav";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <div className="casestudy-container mt-10 flex flex-col md:text-xl ml-10 mr-10 ">
      <PinkNav />
      <h1 className="casestudy text-left flex flex-row mt-5 mb-10 text-primary text-4xl md:text-6xl font-bold md:ml-10">
        UX - Case Study
      </h1>
      <iframe className="lg:ml-10 lg:mr-10 xl:ml-30 xl:mr:30"
        src="https://docs.google.com/presentation/d/e/2PACX-1vRfysutuxBvgX9f_UnhxplYwMK7Kt1onU-pwiW40zeP_vw-5Ke_DbZcolxRI-9lYKm7RHB4TYLZGimi/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        height="469"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        title="Flexercise Case Study"
      ></iframe>

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
};

export default CaseStudy;
