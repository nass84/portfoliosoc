import Navbar from "./helpers/navbar";
import { Timeline } from "react-twitter-widgets";
import Button from "../components/helpers/button";
function Background() {
  return (
    <div className="background-container mx-auto flex flex-col">
      <section className="purple-div bg-primary w-full h-96 top-10"></section>
      <section className="white-div bg-white w-full h-36 h-96 "></section>
      <section className="clear-div w-auto ml-2 mr-2 h-full z-10 absolute self-center justify-center flex-col sm:w-80 md:w:96">
        <div className="center-box flex flex-col ">
          <div className="landing-page-nav">
            <Navbar />
          </div>
          <div className="landing-page-name text-white mb-10 m:flex m:items-center">
            <h1 className="text-3xl mt-10 font-bold sm:text-5xl sm-flex-nowrap">
              {" "}
              Becki Floyd{" "}
            </h1>
            <h1 className="text-xl font-thin sm:text-2xl"> UX Developer </h1>
          </div>
          <div className="landing-page-twitter mb-5">
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "boredinbrum",
              }}
              options={{
                height: "350",
                width: "",
              }}
            />
          </div>
          <div className="landing-page-scratch hidden md:visible">
            <iframe
              src="https://scratch.mit.edu/projects/498739371/embed"
              allowtransparency="true"
              width="485"
              height="402"
              frameborder="0"
              scrolling="no"
              allowfullscreen
            ></iframe>
          </div>
          <div className="landing-page-buttons-div flex flex-col items-center max-w-xs">
            <Button text="About Me" />
            <Button text="Employment" />
            <Button text="Projects" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Background;
