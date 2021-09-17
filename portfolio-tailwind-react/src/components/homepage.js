import Navbar from "./helpers/navbar";
import { Timeline } from "react-twitter-widgets";
import Button from "./helpers/button";

function HomePage() {
  return (
    <div className="home-page-container flex">
      <section className="purple-div w-full h-96 z-10"></section>
      <section className="white-div z-10"></section>
      <section className="clear-div z-20 w-full absolute">
        <div>
          <Navbar />

          <div className="home-page-name-div text-white flex justify-start ml-10 items-center mb-20">
            <h1 className="text-8xl "> Becki Floyd - </h1>
            <h1 className="text-6xl ml-2 font-thin"> UX Developer </h1>
          </div>

          <div>
            
              <div className="home-page-twitter-scratch-div flex justify-around ml-10 mr-10">
                <div className="home-page-twitter">
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

                <div className="home-page-scratch">
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

              <div className="home-page-buttons-div flex justify-around mt-10">
                <Button text="About Me" />
                <Button text="Employment" />
                <Button text="Projects" />
              </div>
            </div>
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
