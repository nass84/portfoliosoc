import Navbar from "./helpers/navbar";
import { Timeline } from "react-twitter-widgets";
import Button from "./helpers/button";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-background">
        <Navbar />

        <div className="landing-page-name  flex items-center ml-10 text-white mb-10">
          <h1 className="text-8xl "> Becki Floyd - </h1>
          <h1 className="text-6xl ml-2 font-thin"> UX Developer </h1>
        </div>

        <div>
          <div className=" landing-page-white-box bg-white">
            <div className="landing-page-twitter-scratch-div flex justify-around">
              <div className="landing-page-twitter">
                <Timeline
                  dataSource={{
                    sourceType: "profile",
                    screenName: "boredinbrum",
                  }}
                  options={{
                    height: "402",
                    width: "485",
                  }}
                />
              </div>

              <div className="landing-page-scratch z-20">
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
            </div>

            <div className="landing-page-buttons-div flex justify-around mt-10">
              <Button text="About Me" />
              <Button text="Employment" />
              <Button text="Projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
